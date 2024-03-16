"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      <h1>Client Page</h1>
      <p>Welcome, {user?.name}!</p>
    </div>
  );
};

export default ClientPage;
