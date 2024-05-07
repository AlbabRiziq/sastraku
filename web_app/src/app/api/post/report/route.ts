
import { NextRequest, NextResponse } from "next/server";
import Content from "../../../../Models/Content";
import User from "../../../../Models/User";
import dbConnect from "../../../../lib/dbConnect";
import PostReport from "../../../../Models/ReportPost";


export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect()


    const { searchParams } = new URL(req.url)

    const post_id = searchParams.get("post_id")
    const title = searchParams.get("title")
    const reason = searchParams.get("reason")


    try {
        const res = await PostReport.create({
            post_id,
            title,
            reason
        })
        return NextResponse.json({ message: "Success" })
    } catch (err) {
        return NextResponse.json({ message: err }, {
            status: 400
        })
    }


}

export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect()
    const url: URL = new URL(req.url);
    const id_post: String = url.searchParams.get('id_post');

    if (id_post !== null) {
        try {
            const post = await PostReport.findOne({ post_id: id_post })
            return NextResponse.json({ message: "Success", data: post })

        } catch (err) {
            return NextResponse.json({ message: "Report tidak ditemukan" }, {
                status: 400
            })
        }
    } else {
        try {
            const post = await PostReport.aggregate().sample(20)
            return NextResponse.json({ message: "Success", data: post })
        } catch (err) {
            return NextResponse.json({ message: "Report tidak ditemukan" }, {
                status: 400
            })
        }
    }

}