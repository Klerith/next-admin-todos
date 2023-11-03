export const dynamic = 'force-dynamic';
export const revalidate = 0;



import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
 title: 'Listado de Todos',
 description: 'SEO Title',
};


export default async function ServerTodosPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
  console.log('construido');
  
  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>

      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      
      <TodosGrid todos={ todos } />
    </>
  );
}