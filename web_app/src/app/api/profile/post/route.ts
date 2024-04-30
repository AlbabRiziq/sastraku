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

        console.log(contents);

    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: "Hello" });
}