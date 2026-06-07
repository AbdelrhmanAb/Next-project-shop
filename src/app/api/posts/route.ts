import { errorHandler } from "@/app/utils/lib/api-handler";
import { ICreatePostDTO } from "@/app/utils/lib/dto";
import { prisma } from "@/app/utils/lib/prisma";
import { posts } from "@/app/utils/posts";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'





export const GET = errorHandler(async (req: NextRequest) => {

    const Data = await prisma.post.findMany()

    return NextResponse.json({ status: 200, Data });
});


export const POST = errorHandler(async (req: NextRequest) => {
    const postSchema = z.object({
        title: z.string().min(3).max(30),
        body: z.string()
    })

    const body = await req.json() as ICreatePostDTO
    const result = postSchema.safeParse(body)

    if (!result.success) {
        const errorMsg = (result.error.issues[0].message)
        return NextResponse.json({ msg: errorMsg }, { status: 401 })

    }
    const newPost = await prisma.post.create({
        data: {
            title: body.title,
            body: body.body
        }
    })
    return NextResponse.json({ msg: "SUCCESS", newPost })
})