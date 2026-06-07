import { NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  console.log("Middleware is running");


  const jwtToken = request.cookies.get("jwtToken");
  const token = jwtToken?.value as string;

  console.log(token)
  console.log('===========================================')
  if (!token) {
    return NextResponse.json(
      { message: "No AuthToken Provided, Access Denied!" },
      { status: 401 },
    );
  }
};

export const config = {
  matcher: ["/",],
};