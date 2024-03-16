"use client";

import { admin } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import toast from "react-hot-toast";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route!");
      } else {
        toast.error("Forbidden API Route!");
      }
    });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <Card>
        <CardHeader>Server Action</CardHeader>
        <CardContent>
          <Button onClick={onServerActionClick}>Run Server Action</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>API Route</CardHeader>
        <CardContent>
          <Button onClick={onApiRouteClick}>Run API Route</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;
