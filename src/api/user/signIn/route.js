// pages/api/signin.js
import { NextResponse } from "next/server";
import { connectMongoDB } from "@/app/lib/mongodb";
import { Users } from "@/models/users";
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email, password } = await req.json();

        // Find the user by email
        const user = await Users.findOne({ email: email });

        if (!user) {
            // If the user does not exist, return an error response
            return NextResponse.json({ message: "User does not exist", status: 404 });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            // If the passwords do not match, return an error response
            return NextResponse.json({ message: "Incorrect password", status: 401 });
        }

        // If the user exists and the password is correct, return a success response
        // In a real application, you would also generate and return a token or session
        return NextResponse.json({ message: "Login successful", status: 200 });

    } catch (error) {
        console.error("An error occurred:", error);
        return NextResponse.json({ message: "Error occurred while signing in", status: 500 });
    }
}
