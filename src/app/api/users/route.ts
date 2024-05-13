import connectMongoDB from "../../../../libs/mongodb";
import Users from "../../../../model/userSchema";
import { NextResponse } from "next/server";

<<<<<<< HEAD
export async function POST(request:Request) {
  await connectMongoDB();
  const { name, email, password } = await request.json();
  await Users.create({ name, email, password });
  return NextResponse.json({ message: "Success" }, { status: 201 });
=======
export async function POST(request:any) {
  const { name, email, password } = await request.json();
  await connectMongoDB();
  const newUser = await Users.create({ name, email, password });
  return NextResponse.json(
    { message: "Success", data: newUser },
    { status: 201 }
  );
>>>>>>> f0af372a133ac3ba2f74eead25c50be4f2087f0e
}

export async function GET() {
  await connectMongoDB();
  const users = await Users.find();
  return NextResponse.json({ users }, { status: 200 });
}
