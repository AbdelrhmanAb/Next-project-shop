// lib/api-handler.ts
import { NextRequest, NextResponse } from 'next/server'

type Handler = (req: NextRequest, context?: any) => Promise<NextResponse>

export function errorHandler(handler: Handler) {
  return async (req: NextRequest, context?: any) => {
    try {
      return await handler(req, context)
    } catch (error) {
      console.error(error)
      const message = error instanceof Error ? error.message : 'Unknown error'
      return NextResponse.json({ message }, { status: 500 })
    }
  }
}