import mongoose from "mongoose";
import Content from "../../../Models/Content"
import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect()
    const headers = req.headers
    const url = new URL(req.url);
    const title = url.searchParams.get('content_title');
    const content = url.searchParams.get('content');
    const desc = url.searchParams.get('content_description');
    const category = url.searchParams.get('category');
    const author = url.searchParams.get('author');

    console.log(headers);


}