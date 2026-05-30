import { posts } from "@/app/utils/posts";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'
export const GET = (req: NextRequest) => {

    return NextResponse.json({ status: 200, posts });
};


export const POST = async (req: NextRequest) => {

    console.log('======================================================')
    const body = await req.json()
    // console.log( body );
    console.log('======================================================')


    const postSchema = z.object({
        title: z.string().min(3).max(30),
        body: z.string()
    })

   const result =  postSchema.safeParse(body)

    if (!result.success) {
     console.log(result.error.issues[0].message)   
    return NextResponse.json({ msg: "ERROR " })

    }




    return NextResponse.json({ msg: "SUCCESS" })
}