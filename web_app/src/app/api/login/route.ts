import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "../../../Models/User";
import jwt from 'jsonwebtoken'
import dbConnect from "../../../lib/dbConnect";


export async function POST(req: Request, res: Response) {

    dbConnect()

    const { searchParams } = new URL(req.url)

    const username = searchParams.get("username")
    const password = searchParams.get("password")

    const user = await User.findOne({
        "username": username
    })

    if (user === null) {
        return NextResponse.json({
            message: "Username dan password tidak valid"
        }, {
            status: 404
        })
    } else {

        console.log(password, user.password);

        const paswdHashed = user.password
        const token = jwt.sign({ user_id: user.user_id }, process.env.NEXT_PUBLIC_SECRET_KEY)
        const headers = new Headers();

        const validatePaswd = bcrypt.compareSync(password, paswdHashed)

        if (validatePaswd) {


            headers.set('set-cookie', `tkn=${token};path=/;`);

            return NextResponse.json({
                message: "Login Berhasil"
            }, {
                headers: headers
            })
        } else {
            return NextResponse.json({
                message: "Password atau username tidak valid"
            }, {
                status: 404
            })
        }



    }



}