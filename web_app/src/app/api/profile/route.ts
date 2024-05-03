import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../Models/User";

export async function GET(req: NextRequest, res: NextResponse) {

    await dbConnect()

    const cookie = cookies()
    const token = cookie.get("tkn").value

    let userID = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)
    userID = userID.user_id



    try {
        const user = await User.findOne({
            "user_id": userID
        })

        return NextResponse.json({
            username: user.username,
            nama_lengkap: user.nama_lengkap,
        })

    } catch (err) {

        return NextResponse.json({
            message: "ERROR"
        }, {
            status: 404
        })
    }


}