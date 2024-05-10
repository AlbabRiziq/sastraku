import { NextResponse } from "next/server";
import User from "../../../../Models/User";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'



export async function POST(req: Request, res: Response) {
    const { searchParams } = new URL(req.url)
    const bio = searchParams.get("bio")



    const cookie = cookies()
    const token = cookie.get("tkn").value
    let userID = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)
    userID = userID.user_id

    if (bio !== null) {
        try {
            const updateBio = await User.updateOne({
                "user_id": userID
            }, {
                "bio": bio
            })
            console.log(updateBio);
            return NextResponse.json({
                message: "Success"
            })

        } catch (err) {
            console.log(err);

            return NextResponse.json({
                message: "ERROR1"
            }, {
                status: 404
            })
        }
    } else {
        return NextResponse.json({
            message: "ERROR"
        }, {
            status: 404
        })
    }
}

export async function GET(req: Request, res: Response) {
    const { searchParams } = new URL(req.url)
    const bio = searchParams.get("bio")



    const cookie = cookies()
    const token = cookie.get("tkn").value
    let userID = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)
    userID = userID.user_id


    try {
        const user_data = await User.findOne({
            "user_id": userID
        })
        return NextResponse.json({
            bio: user_data.bio
        })
    } catch (err) {
        console.log(err);

        return NextResponse.json({
            message: "ERROR"
        }, {
            status: 404
        })
    }



}