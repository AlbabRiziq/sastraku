import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.query);


    // Anda bisa melakukan sesuatu dengan id di sini, misalnya mengambil data dari database
    return NextResponse.json({
        message: "GET request berhasil"
    }, {
        status: 200
    })
}