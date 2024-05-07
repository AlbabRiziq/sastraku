
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import dbConnect from "../../../../../lib/dbConnect";
import User from "../../../../../Models/User";
import SubComment from "../../../../../Models/SubComment";



export async function POST(req: NextRequest, res: NextResponse) {

    await dbConnect()
    const cookie = req.cookies;
    const token = cookie.getAll("tkn")[0].value
    const verify = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)
    const { searchParams } = new URL(req.url)
    const value = searchParams.get("value")
    const comment_id = searchParams.get("comment_id")


    if (!verify) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    const user_id = verify.user_id
    let nama_lengkap: String;
    try {
        const user = await User.findOne({ user_id: user_id })
        nama_lengkap = user.nama_lengkap

    } catch (err) {
        return NextResponse.json({ message: "User tidak ditemukan" }, {
            status: 404
        })
    }

    try {
        console.log(value);

        const res = await SubComment.create({
            user_id: user_id,
            nama_lengkap: nama_lengkap,
            value: value,
            comment_id: comment_id
        })


        console.log(res);

        return NextResponse.json({ message: "Success", data: res }, {
            status: 200
        })

    } catch (err) {
        console.log(err);

        return NextResponse.json({ message: "Gagal ditambahkan" }, {
            status: 404
        })
    }

}

export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect()
    const { searchParams } = new URL(req.url)
    const comment_id = searchParams.get("comment_id")

    try {
        const comment = await SubComment.find({ comment_id })

        return NextResponse.json({ message: "Success", data: comment }, {
            status: 200
        })
    } catch (err) {
        return NextResponse.json({ message: "Tidak valid" }, {
            status: 404
        })
    }
}