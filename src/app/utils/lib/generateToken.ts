import jwt from 'jsonwebtoken';
import { TUserPayload } from './types';
import { serialize } from 'cookie';

    const secret = process.env.SECRET_KEY!

export const signToken = (payload: TUserPayload): string => {

    return jwt.sign(payload, secret)
}


export const verifyToken = <T>(token: string): T =>{

    return jwt.verify(token,secret) as T
    
}


export const setCookie= (payload:TUserPayload):string =>{

    const token = signToken(payload)

    const cookie = serialize('jwtToken',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV == 'production',
        sameSite:'strict',
        maxAge:60 * 60 * 24 * 30, // 30 days,
        path:'/'
    })

    return cookie

}
