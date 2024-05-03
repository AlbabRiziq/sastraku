import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import Content from "../../../../Models/Content";

export async function GET(req: NextRequest, res: NextResponse) {
    const cookie = cookies()

    const token = cookie.get("tkn").value
    const user = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)
    const userId = user.user_id



    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    try {
        const contents = await Content.find({ user_id: userId })
        return NextResponse.json(contents, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    const cookie = cookies()
    const { searchParams } = new URL(req.url)
    const id_post = searchParams.get("id_post")


    const token = cookie.get("tkn").value
    const user = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)
    const userId = user.user_id

    console.log(id_post);



    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {

        const result = await Content.deleteOne({

            content_id: id_post
        })
        console.log(result);
        if (result.deletedCount === 0) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "OK" }, { status: 200 });

    } catch (error) {

        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }

}