export const dynamic = 'force-dynamic';

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
 title: 'Server Actions',
 description: 'SEO Title',
};


export default async function RestTodosPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
  // fetch('....', { next: { revalidate: 60 } })
  
  return (
    <>
      <span className="text-3xl mb-10">Server Actions (Alpha)</span>
      
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      
      <TodosGrid todos={ todos } />
    </>
  );
}