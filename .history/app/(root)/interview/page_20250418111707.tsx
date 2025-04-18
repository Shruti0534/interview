import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return <p>User not found</p>;  // Optional: Handle case when user is not found
  }

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user.name}
        userId={user.id}
        profile
       
        type="generate"
      />
    </>
  );
};

export default Page;
