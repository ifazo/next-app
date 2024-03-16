import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
  const user = await currentUser();

  return (
    <div>
      <h1>Server Page</h1>
      <p>Welcome, {user?.name}!</p>
    </div>
  );
};

export default ServerPage;
