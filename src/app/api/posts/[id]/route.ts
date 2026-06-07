import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/app/utils/posts";
import { Tpost } from "@/data/posts";
import { prisma } from "@/app/utils/lib/prisma";
import { IUpdatePostDTO } from "@/app/utils/lib/dto";
import { errorHandler } from "@/app/utils/lib/api-handler";

export const GET =errorHandler( async (req: NextRequest, { params }: { params: { id: string } }) => {
    const p = await params
    const id = await Number(p.id);



    const post = await prisma.post.findUnique({
        where: {
            id
        }
    })

    if (!post) {
        return NextResponse.json(
            { msg: "Post Not Found" },
            { status: 404 },

        );
    }

    return NextResponse.json({
        msg: "SUCCESS",
        post,

    });
});



export const PUT =errorHandler( async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {

    const p = await params
    const id = await Number(p.id);
    const body = await req.json() as IUpdatePostDTO ;


    const post = await prisma.post.update({
        where:{
            id
        },
        data:{
            title:body.title,
            body:body.body
        }
    })


    if (!post) {
        return NextResponse.json(
            { msg: "Post Not Found" },
            { status: 404 }
        );
    }


    return NextResponse.json({
        msg: "UPDATED",
        post,
    });
});


export const DELETE =errorHandler( async (req: NextRequest, { params }: { params: { id: string } }) => {
    const p = await params
    const id = await Number(p.id);

  const deletePost =   await prisma.post.delete({
        where:{
            id
        }
    })
    return NextResponse.json({
        msg: "DELETE",
        deletePost
    });
});