// src/app/login/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from 'bcryptjs';

export default function LoginPage() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {
        try {

            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const credentialsToSend = { ...credentials, password: hashedPassword };
            const response = await fetch('/api/user/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentialsToSend),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            router.push("/dashboard");
        } catch (error) {
            console.log("Login failed", error.message);
        }
    };

    return (
        // <div>
        //     <label htmlFor="email">Email</label>
        //     <input
        //         id="email"
        //         type="email"
        //         value={credentials.email}
        //         onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        //         placeholder="Email"
        //     />
        //     <label htmlFor="password">Password</label>
        //     <input
        //         id="password"
        //         type="password"
        //         value={credentials.password}
        //         onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        //         placeholder="Password"
        //     />
        //     <button onClick={onLogin}>Log In</button>
        // </div>
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center backdrop-filter backdrop-blur" style={{ backgroundImage: "url('/assets/image92.jpg')" }}>
            <div className="bg-[#a8a698f8] p-8 rounded-md shadow-lg w-full max-w-md ">
                <h2 className="text-2xl font-bold mb-4 text-center text-white playfair-display">Log In</h2>
                <label htmlFor="email" className="block mb-2 text-white">Email</label>
                <input
                    id="email"
                    type="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    placeholder="Email"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <label htmlFor="password" className="block mb-2 text-white">Password</label>
                <input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    placeholder="Password"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <button onClick={onLogin} className="w-full p-2 bg-black text-white rounded">Log In</button>
            </div>
        </div>
    );
}
