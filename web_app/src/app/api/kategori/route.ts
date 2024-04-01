import { NextRequest, NextResponse } from "next/server";
import Category from '../../../Models/Category'
import dbConnect from "../../../lib/dbConnect";


export async function POST(req: NextRequest, res: NextResponse) {

    await dbConnect()
    const data = new URL(req.url)
    const nama_kategori = data.searchParams.get('nama_kategori')


    const category = await Category.create({
        category_id: " ",
        category_name: nama_kategori

    })

    console.log(category);


    return NextResponse.json({ message: 'asdf' })
}