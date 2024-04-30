import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";
import Content from "../../Models/Content";
import User from "../../Models/User";
import { notFound } from "next/navigation";

export async function GET(req: NextRequest, res: NextResponse) {

    await dbConnect()
    const { searchParams } = new URL(req.url)
    let user_id = searchParams.get("user_id")

    const user_data: any = await User.findOne({ user_id: user_id })

    if (user_data !== null) {
        const username = user_data.username

        return NextResponse.redirect(new URL(`/user/${username}`, req.url))
    } else {
        return NextResponse.redirect("/notfound")
    }







}