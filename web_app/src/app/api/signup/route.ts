import mongoose from "mongoose";
import dbConnect from "../../lib/dbConnect";
import User from "../../../Models/User";
import validator from "validator";
import randomstring from 'randomstring';
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {

  await dbConnect()

  const { searchParams } = new URL(req.url)
  const namaLengkap = searchParams.get("nama_lengkap")
  const username = searchParams.get("username")
  const passwd = searchParams.get("password")

  const validatePasswd = validator.isLength(passwd, { min: 5 })

  const userN = await User.findOne({
    username: username
  })

  if (userN == null) {
    const user_id = randomstring.generate(8)
    const data = await User.create({
      user_id: user_id,
      username,
      nama_lengkap: namaLengkap,
      password: passwd,


    })
    return NextResponse.json({
      message: "username berhasil ditambahkan",
      data: {
        nama_lengkap: data.nama_lengkap,
        username: data.username
      }
    })

  } else {
    return NextResponse.json({
      message: "Username sudah digunakan"
    }, {
      status: 400
    })

  }


}
