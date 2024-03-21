import { NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import { Users } from "@/models/users";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { username, email, password } = await req.json();
    const userExists = await Users.findOne({ email: email });
    if (!userExists) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Users({ username, email, password });

      await newUser.save();

      console.log(username);
      return NextResponse.json({ message: "User registered", status: 200 });
    } else {
      return NextResponse.json({
        message: "User has already registered",
        status: 200,
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({
      message: "Error occurred while registering user",
      status: 500,
    });
  }
}
