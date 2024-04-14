import Content from "../../../Models/Content"
import dbConnect from "../../../lib/dbConnect";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";
import User from "../../../Models/User";





const uploadImage = async (file: any) => {


    const formData = new FormData();
    formData.append('image', file);
    formData.append("key", process.env.NEXT_PUBLIC_IMGAPI)

    try {
        const up = await fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: formData

        })
        const res = await up.json()
        const imageUrl = res.data.url
        const deleteUrl = res.data.delete_url

        return { imageUrl: imageUrl, deleteUrl: deleteUrl }
    } catch (err) {
        return
    }

}

export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect()

    const data = req.formData()

    const title = (await data).get('content_title')
    const content = (await data).get('value')
    const desc = (await data).get('content_description')
    const category_id = (await data).get('category_id')
    const sub_category_id = (await data).get('sub_category_id')
    const file = (await data).get('file')

    let author: String;


    const cookie = req.cookies;
    const token = cookie.getAll("tkn")[0].value
    const verify = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)

    if (!verify) {
        return NextResponse.json({ message: "Token is not valid" }, {
            status: 400
        })
    }

    const coverImg = file == null ? null : await uploadImage(file)
    const coverImage = coverImg != null ? coverImg.imageUrl : null

    const user_data = await User.findOne({ user_id: verify.user_id })
    const user_id = user_data.user_id

    author = user_data.nama_lengkap
    try {
        const data = await Content.create({
            user_id,
            content_title: title,
            content_description: desc,
            value: content,
            category_id,
            sub_category_id,
            author,
            cover_url: coverImage
        })

        const content_id = data.content_id

        return NextResponse.json({
            message: "Success",
            id: content_id
        })
    } catch (err) {

        console.log(err);
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
            const post = await Content.findOne({ content_id: id_post })
            return NextResponse.json({ message: "Success", data: post })

        } catch (err) {
            return NextResponse.json({ message: "Konten tidak ditemukan" }, {
                status: 400
            })
        }
    } else {
        try {
            const post = await Content.find()
            return NextResponse.json({ message: "Success", data: post })

        } catch (err) {
            return NextResponse.json({ message: "Konten tidak ditemukan" }, {
                status: 400
            })
        }
    }

}