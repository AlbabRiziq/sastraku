import { NextRequest, NextResponse } from "next/server";

import { KJUR } from 'jsrsasign';

export function LoginMiddleware(req: NextRequest) {
    if (req.cookies.get('tkn')) {
        const token = req.cookies.get('tkn');
        const isValid = KJUR.jws.JWS.verifyJWT(token.value, process.env.NEXT_PUBLIC_SECRET_KEY, { alg: ['HS256'] });

        if (isValid) {
            // console.log(typeof isValid);

            return NextResponse.redirect(new URL("/", req.url))

        } else {
            return NextResponse.next();
        }
    }
}