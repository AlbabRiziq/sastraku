import { NextResponse, type NextRequest } from 'next/server'
import { LoginMiddleware } from './Middleware/login'
import { KJUR } from 'jsrsasign';


export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signup')) {
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

}