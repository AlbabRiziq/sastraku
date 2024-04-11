import mongoose from "mongoose";
import Content from "../../../Models/Content"
import dbConnect from "../../../lib/dbConnect";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";
import User from "../../../Models/User";


export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect()
    const url = new URL(req.url);
    const title = url.searchParams.get('content_title');
    const content = url.searchParams.get('value');
    const desc = url.searchParams.get('content_description');
    const category_id = url.searchParams.get('category_id');
    const sub_category_id = url.searchParams.get('category_id');

    let author: String;

    const cookie = req.cookies;
    const token = cookie.getAll("tkn")[0].value
    const verify = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)

    if (!verify) {
        return NextResponse.json({ message: "Token is not valid" }, {
            status: 400
        })

    }

    const user_data = await User.findOne({ user_id: verify.user_id })
    const user_id = user_data.user_id

    author = user_data.nama_lengkap
    try {
        const data = await Content.create({
            user_id,
            content_title: title,
            content_description: desc,
            value: content,
            category_id,
            sub_category_id,
            author
        })

        const content_id = data.content_id

        return NextResponse.json({ message: "Konten berhasil dibuat" })
    } catch (err) {

        console.log(err);
        return NextResponse.json({ message: err }, {
            status: 400
        })
    }

}

export function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ message: "Hello" })

}