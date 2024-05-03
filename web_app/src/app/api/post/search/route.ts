
import { NextRequest, NextResponse } from "next/server";
import dbConnect from '../../../../lib/dbConnect';
import Content from '../../../../Models/Content';


export async function GET(req: NextRequest, res: NextResponse) {

    await dbConnect()
    const url: URL = new URL(req.url);
    const q: String = url.searchParams.get('q');


    try {
        const result = await Content.find({
            content_title: {
                $regex: q,
                $options: 'i'
            }
        })

        return NextResponse.json({ data: result })
    } catch {
        return NextResponse.json({ message: 'Error' })
    }

}