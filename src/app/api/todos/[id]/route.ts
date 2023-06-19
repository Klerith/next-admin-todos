import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

interface Segments {
  params: {
    id: string;
  }
}


export async function GET(request: Request, { params }: Segments ) { 

  const { id } = params;
  const todo = await prisma.todo.findFirst({ where: { id } });

  if ( !todo ) {
    return NextResponse.json({ message: `Todo con id ${ id } no exite` }, { status: 404 });
  }


  return NextResponse.json(todo);
}

export async function PUT(request: Request, { params }: Segments ) { 

  const { id } = params;
  const todo = await prisma.todo.findFirst({ where: { id } });

  if ( !todo ) {
    return NextResponse.json({ message: `Todo con id ${ id } no exite` }, { status: 404 });
  }

  const body = await request.json();


  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { ...body }
  })



  return NextResponse.json(updatedTodo);
}