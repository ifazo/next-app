import { getUsers, getUsersByRole } from "@/data/user";
import { UserRole } from "@prisma/client";

export async function GET(request: Request) {
  try {
    // const { searchParams } = new URL(request.url);
    // const role = searchParams.get("role") as UserRole;

    // if (role) {
    //   const user = await getUsersByRole(role);
    //   return new Response(JSON.stringify(user), {
    //     headers: { "content-type": "application/json" },
    //   });
    // }

    const user = await getUsers();
    const data = JSON.stringify(user);

    return new Response(data, {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
