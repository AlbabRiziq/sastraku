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
    const category = url.searchParams.get('category_id');
    const sub_category = url.searchParams.get('category_id');
    console.log(sub_category);


    let author: String;

    // console.log(title, content, desc, category);


    const cookie = req.cookies;
    const token = cookie.getAll("tkn")[0].value


    const verify = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)

    if (!verify) {
        console.log("Invalid Token");

    }



    // const user = await User.findOne({
    //     user_id: user_id
    // })
    // author = user

    // if ()




    return NextResponse.json({ message: "kdkdfk" })

}