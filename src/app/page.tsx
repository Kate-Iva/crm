'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Home() {
    const router = useRouter();

    const handleEnter = () => {
        router.push('/dashboard');
    };

    return (
        <main>
            <header className="flex items-center gap-5 py-6	px-10 border-b border-gray-300">
                <h1 className="flex-1 text-3xl font-semibold text-gray-900">
                    Home page
                </h1>

            </header>
            <button className="flex items-center gap-2 p-6 mt-auto mx-auto"
                    type="button" onClick={handleEnter}>
                <Image
                    width={18}
                    height={18}
                    src="/icons/arrow-right-on-rectangle.svg"
                    alt="exit icon"
                />
                Enter
            </button>
        </main>
    );
}
