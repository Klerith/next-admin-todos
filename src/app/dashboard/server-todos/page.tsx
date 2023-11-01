export const dynamic = 'forde-dynamic';

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Listado de Todos',
 description: 'SEO Title',
};


export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  
  return (
    <div>
      <span className="text-3xl mb-2">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      
      <TodosGrid todos={ todos } />
    </div>
  );
}