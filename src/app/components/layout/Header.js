import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <Link href="" className="text-primary font-semibold text-3xl">ST PIZZA</Link>
            <nav className="flex gap-8 text-gray-500 font-semibold items-center">
                <Link href={''}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>
                <Link href={''} className="bg-primary text-white px-8 py-2 rounded-full">Login</Link>
            </nav>
        </header>
    )
}

export default Header