import { NextRequest, NextResponse } from "next/server";
import User from "../../../../Models/User";
import { AwardIcon } from "lucide-react";
import dbConnect from "../../../../lib/dbConnect";


export async function GET(req: NextRequest) {


    await dbConnect()
    try {
        const total_user = await User.find({})

        console.log(total_user);


        return NextResponse.json({
            status: 200,
            body: {
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