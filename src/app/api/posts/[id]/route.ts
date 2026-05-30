import { NextRequest, NextResponse } from "next/server";
import { posts } from "@/app/utils/posts";
import { Tpost } from "@/data/posts";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const p = await params
    const id = await Number(p.id);



    const post = posts.find((item) => {
        return item.id === id;
    });

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
};



export const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {

    const p = await params
    const id = await Number(p.id);

    const post = posts.find((item) => item.id === id);

    if (!post) {
        return NextResponse.json(
            { msg: "Post Not Found" },
            { status: 404 }
        );
    }

    const body = await req.json();

    post.title = body.title || post.title;
    post.description = body.description || post.description;

    return NextResponse.json({
        msg: "UPDATED",
        post,
    });
};


export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const p = await params
    const id = await Number(p.id);

    posts.filter((item) => item.id !== id);
    return NextResponse.json({
        msg: "DELETE",

    });
};