"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

// Session duration (1 week)
const SESSION_DURATION = 60 * 60 * 24 * 7;

// Set session cookie
export async function setSessionCookie(idToken: string) {
  const cookieStore = cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000,
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

type SignUpParams = {
  uid: string;
  name: string;
  email: string;
  profileURL?: string;
  resumeURL?: string;
};

type SignInParams = {
  email: string;
  idToken: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  profileURL?: string;
  resumeURL?: string;
};

export async function signUp(params: SignUpParams) {
  const { uid, name, email, profileURL, resumeURL } = params;

  try {
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists. Please sign in.",
      };
    }

    await db.collection("users").doc(uid).set({
      name,
      email,
      profileURL: profileURL ?? null,
      resumeURL: resumeURL ?? null,
    });

    return {
      success: true,
      message: "Account created successfully. Please sign in.",
    };
  } catch (error: unknown) {
    console.error("Error creating user:", error);

    if (error instanceof Error && error.message === "auth/email-already-exists") {
      return {
        success: false,
        message: "This email is already in use",
      };
    }

    return {
      success: false,
      message: "Failed to create account. Please try again.",
    };
  }
}

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord) {
      return {
        success: false,
        message: "User does not exist. Create an account.",
      };
    }

    await setSessionCookie(idToken);

    return {
      success: true,
      message: "Signed in successfully.",
    };
  } catch (error: unknown) {
    console.log("Error logging in:", error);
    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
  }
}

export async function signOut() {
  const cookieStore = cookies();
  cookieStore.delete("session");
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = cookies();

  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    const userDoc = await db.collection("users").doc(decodedClaims.uid).get();
    if (!userDoc.exists) return null;

    const userData = userDoc.data();
    if (!userData) return null;

    return {
      id: userDoc.id,
      name: userData.name,
      email: userData.email,
      profileURL: userData.profileURL,
      resumeURL: userData.resumeURL,
    };
  } catch (error: unknown) {
    console.log("Error verifying session cookie:", error);
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();
  return Boolean(user);
}
