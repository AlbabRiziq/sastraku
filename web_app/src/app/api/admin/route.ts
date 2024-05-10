import { NextRequest, NextResponse } from "next/server";
import Content from "../../../Models/Content";
import User from "../../../Models/User";
import dbConnect from "../../../lib/dbConnect";

export async function GET(req: NextRequest) {

    await dbConnect()
    try {
        const total_content = await Content.find({}).countDocuments()
        const total_user = await User.find({}).countDocuments();

        console.log(total_user);


        return NextResponse.json({
            status: 200,
            body: {
                total_content,
                total_user
            }
        })

    } catch (error) {
        return NextResponse.json({
            status: 500,
            body: {
                message: error.message
            }
        })
    }

}