import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Content from "../../../Models/Content";

export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect()


} 