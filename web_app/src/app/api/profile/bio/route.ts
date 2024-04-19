import { NextResponse } from "next/server";
import User from "../../../../Models/User";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'

export async function POST(req: Request, res: Response) {

    const { searchParams } = new URL(req.url)
    const bio = searchParams.get("bio")


    const cookie = cookies()
    const token = cookie.get("tkn").value

    const userID = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)

    try {
        const updateBio = await User.updateOne({
            "user_id": userID
        }, {
            "bio": bio
        })
        return NextResponse.json({
            message: "Success"
        })
    } catch (err) {
        return NextResponse.json({
            message: "ERROR"
        }, {
            status: 404
        })
    }


}