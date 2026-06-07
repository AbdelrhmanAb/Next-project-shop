import { errorHandler } from "@/app/utils/lib/api-handler";
import { IRegisterUserDto } from "@/app/utils/lib/dto";
import { setCookie, signToken } from "@/app/utils/lib/generateToken";
import { prisma } from "@/app/utils/lib/prisma";
import { TUserPayload } from "@/app/utils/lib/types";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


export const POST = errorHandler(async (req: NextRequest) => {

    const userSchema = z.object({
        username: z.string().min(3).max(15),
        email: z.string().min(2).max(200).email(),
        password: z.string().min(6)
    })
    const body = await req.json() as IRegisterUserDto

    const validation = userSchema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(
            { message: validation.error.issues[0].message },
            { status: 400 },
        );
    }

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (user) {
        return NextResponse.json(
            { message: "This user is already existed" },
            { status: 400 },
        );
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(body.password, salt)


    const newUser = await prisma.user.create({
        data: {
            username: body.username,
            email: body.email,
            password: hashPassword
        },
        select: {
            id: true,
            username: true,
            email: true,
            isAdmin: true
        }
    })
    const userPayload: TUserPayload = {
        id: newUser.id,
        username: newUser.username,
        isAdmin: newUser.isAdmin,
    };

  
    const cookie = setCookie(userPayload)



    return NextResponse.json(
        { msg: 'SUCCESS', user: { ...newUser, cookie } },
        { status: 201 ,headers:{'Set-Cookie':cookie}}
    )
});