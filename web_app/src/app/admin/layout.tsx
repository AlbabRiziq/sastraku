import type { Metadata } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../Models/User";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { notFound } from "next/navigation";






export default async function RootLayout({ children }) {
    const cookie = cookies()
    const token = cookie.get('tkn').value
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)


    if (decoded) {
        await dbConnect()
        const user = await User.findOne({ user_id: decoded.user_id })

        const roleUser = user.role

        if (roleUser === 'user') {
            notFound()
        }
    }









    return (
        <section className="overflow-x-hidden">
            {children}
        </section>

    );
}
