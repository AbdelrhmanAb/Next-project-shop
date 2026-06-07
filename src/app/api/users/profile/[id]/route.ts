import { errorHandler } from "@/app/utils/lib/api-handler";
import { IAuthToken } from "@/app/utils/lib/dto";
import { verifyToken } from "@/app/utils/lib/generateToken";
import { prisma } from "@/app/utils/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {
        id: string;
    };
}

export const GET = errorHandler(async (req: NextRequest, { params }: Props) => {

    const p = await params
    const id = await parseInt(p.id);
    if (!id) {
        return NextResponse.json(
            { message: "Invalid ID", id },
            { status: 400 }
        );
    }

    const token = req.cookies.get('jwtToken')?.value 

    console.log('token============================');
    console.log(token);
    console.log('token============================');
        if (!token) {
        return NextResponse.json(
            { message: "User not allowed" },
            { status: 403 }
        );
    }

    const authToken =await verifyToken(token)
    console.log(authToken)
    console.log('token============================');


    const user = await prisma.user.findUnique({
        where: {
            id,
        },
        select:{
            id:true,
            email:true,
            username:true
        }
    });

    if (!user) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
    }

    if (user.id === authToken.id) {
        
        return NextResponse.json(user, {
            status: 200,
        });
    }

    return NextResponse.json(
        { message: "User not allowed" },
        { status: 403 }
    );




})



export const DELETE = errorHandler(async (req: NextRequest, { params }: Props) => {


    const p = await params
    const id = await parseInt(p.id);
    if (isNaN(id)) {
        return NextResponse.json(
            { message: "Invalid ID", id },
            { status: 400 }
        );
    }

    const token =await req.cookies.get('jwtToken')?.value ||'q'

    console.log('token============================');
    console.log(token);
    console.log('token============================');
    
    if (!token) {
        return NextResponse.json(
            { message: "User not allowed ====" },
            { status: 403 }
        );
    }

    const authToken = verifyToken(token)

    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })
  

    if (!user) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
    }

    if (user.id === authToken.userPayload.id) {

  const deleteUser = await prisma.user.delete({
        where: {
            id,
        },
    });

        return NextResponse.json(user, {
            status: 200,
        });

        
    }

    return NextResponse.json(
        { message: "User not allowed" },
        { status: 403 }
    );


})