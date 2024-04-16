import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Content from "../../../Models/Content";

export async function GET(req: NextRequest, res: NextResponse) {

    await dbConnect()

    const url: URL = new URL(req.url);
    const id_post: String = url.searchParams.get('id_post');

    const recommend = await Content.find({}, {}, { sort: { "time": -1 }, limit: 5 })

    return NextResponse.json({ message: "Success", data: recommend })

}