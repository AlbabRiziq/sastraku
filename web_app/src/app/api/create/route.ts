import mongoose from "mongoose";
import Content from "../../../Models/Content"
import dbConnect from "../../../lib/dbConnect";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";
import User from "../../../Models/User";


export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect()
    const headers = req.headers
    const url = new URL(req.url);
    const title = url.searchParams.get('content_title');
    const content = url.searchParams.get('content');
    const desc = url.searchParams.get('content_description');
    const category = url.searchParams.get('category');
    let author: String;

    const cookie = req.cookies;
    const token = cookie.getAll("tkn")[0].value

    jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY, async (err, decoded) => {
        if (err) {
            return NextResponse.redirect("/login")
        } else {
            const username = await User.findOne({ user_id: decoded.user_id }).select("username")
            author = username.username

            // const newContent = new Content({
            //     title: title,
            //     content: content,
            //     description: desc,
            //     category: category,
            // })

            console.log(content);

        }
    })


    return NextResponse.json({ message: "kdkdfk" })

}