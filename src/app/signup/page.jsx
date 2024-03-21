"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import bcrypt from 'bcryptjs';

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {
        try {

            const hashedPassword = await bcrypt.hash(user.password, 10);
            const userToSend = { ...user, password: hashedPassword };

            const response = await fetch('/api/user/signUp', {
                method: 'POST',
                headers: {
                 'Content-Type': 'application/json',
                },
                body: JSON.stringify(userToSend),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok hehehehe');
            }
            const data = await response.json();
            router.push("/signin");
        } catch (error) {
          console.log("Signup failed", error.message);
        }
    };
  
return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 relative">
                {/* Background image */}
                <img src="/assets/image92.jpg" alt="Background" className="w-full h-full object-cover absolute" />
                {/* Image at the 2/3 partition */}
                <img src="/assets/WhatsApp_Image_2024-03-10_at_01.29.10-removebg-preview.png" alt="Partition" className="w-full h-auto object-cover absolute" />
            </div>
            <div className="md:w-1/3 p-8 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md">
                <h1 className="text-4xl font-bold text-white mb-4 playfair-display">Sign Up</h1>
                <label htmlFor="username" className="block mb-2">Username</label>
                <input
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Username"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <label htmlFor="password" className="block mb-2">Password</label>
                <input
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <button onClick={onSignup} className="w-full p-2 bg-blue-500 text-white rounded">Sign Up</button>
            </div>
        </div>
    );
}
