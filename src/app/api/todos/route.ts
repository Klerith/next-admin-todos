
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  const todos = await prisma.todo.findMany();

  return NextResponse.json( todos );
}