import { NextRequest, NextResponse } from "next/server";
import SubCategory from '../../../Models/SubCategory';
import dbConnect from "../../../lib/dbConnect";


export async function POST(req: NextRequest, res: NextResponse) {

    await dbConnect()
    const data = new URL(req.url)
    const sub_category_name = data.searchParams.get('sub_category_name')


    try {
        const sub = await SubCategory.findOne({ sub_category_name: sub_category_name })

        if (sub) {
            return NextResponse.json({ message: 'Sub Kategori sudah ada' })
        } else {
            await SubCategory.create({
                sub_category_id: " ",
                sub_category_name: sub_category_name

            })

            return NextResponse.json({ message: 'Sub Kategori berhasil ditambahkan' })
        }
    } catch (er) {
        console.log(er)

        return NextResponse.json({ message: 'Sub Kategori gagal ditambahkan' })
    }

}

export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect()
    const sub = await SubCategory.find({})
    return NextResponse.json(sub)
}