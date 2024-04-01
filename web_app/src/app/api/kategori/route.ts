import { NextRequest, NextResponse } from "next/server";
import Category from '../../../Models/Category'
import dbConnect from "../../../lib/dbConnect";


export async function POST(req: NextRequest, res: NextResponse) {

    await dbConnect()
    const data = new URL(req.url)
    const nama_kategori = data.searchParams.get('nama_kategori')


    try {
        const category = await Category.findOne({ category_name: nama_kategori })

        if (category) {
            return NextResponse.json({ message: 'Kategori sudah ada' })
        } else {
            await Category.create({
                category_id: " ",
                category_name: nama_kategori

            })

            return NextResponse.json({ message: 'Kategori berhasil ditambahkan' })
        }
    } catch {
        return NextResponse.json({ message: 'Kategori gagal ditambahkan' })
    }



    return NextResponse.json({ message: 'asdf' })
}

export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect()
    const category = await Category.find({})
    return NextResponse.json(category)
}