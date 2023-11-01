'use server';

import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const sleep = (seconds: number = 0) => {
  return new Promise(
    (resolve) => setTimeout(resolve, seconds * 1000)
  );
}


export const toggleTodo = async(id: string, complete: boolean ): Promise<Todo> =>  {

  await sleep(3);

  const todo = await prisma.todo.findFirst({ where: { id } });

  if ( !todo ) {
    throw new Error('Todo not found');
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete }
  });

  revalidatePath('dashboard/server-todos')
  return updatedTodo;

}

export const createTodo = async( description: string ): Promise<Todo> => {

  const todo = await prisma.todo.create({
    data: { description }
  });


  revalidatePath('dashboard/server-todos')
  return todo;

}


export const deleteCompletedTodos = async():Promise<void> => {
  
    const todo = await prisma.todo.deleteMany({
      where: { complete: true }
    });
  
    revalidatePath('dashboard/server-todos')
}
