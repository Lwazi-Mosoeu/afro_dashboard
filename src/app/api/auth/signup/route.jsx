// import { UserService } from '@/database/db';

// export async function POST(req) {
//   const { username, password } = await req.json();

//   if (!username || !password) {
//     return Response.json(
//       { error: "Username and password required" },
//       { status: 400 }
//     );
//   }

//   try {
//     const user = await UserService.createUser(username, password);
//     return Response.json(user);
//   } catch (error) {
//     return Response.json(
//       { error: error.message.includes("unique") ?
//         "Username already exists" : "Registration failed" },
//       { status: 400 }
//     );
//   }
// }
