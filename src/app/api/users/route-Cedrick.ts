import connectMongoDB from "../../../../libs/mongodb";
import Users from "../../../../model/userSchema";
import { NextResponse } from "next/server";

export async function POST(request:any) {
  const { name, email, password } = await request.json();
  await connectMongoDB();
  const newUser = await Users.create({ name, email, password });
  return NextResponse.json(
    { message: "Success", data: newUser },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const users = await Users.find();
  return NextResponse.json({ users }, { status: 200 });
}
