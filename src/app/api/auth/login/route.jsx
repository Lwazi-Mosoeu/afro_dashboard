// import { UserService } from '@/database/db';

// export async function POST(req) {
//   const { username, password } = await req.json();

//   try {
//     const user = await UserService.verifyUser(username, password);
//     if (!user) return new Response("Invalid credentials", { status: 401 });
//     return Response.json(user);
//   } catch (error) {
//     return new Response("Login failed", { status: 500 });
//   }
// }
