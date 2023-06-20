'use client';


import { Todo } from "@prisma/client";

import styles from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo|void>
}


export const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div className={ todo.complete ? styles.todoDone : styles.todoPending }>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">

        <div
          onClick={ () => toggleTodo(todo.id, !todo.complete) }
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:bg-opacity-60
            ${ todo.complete ? 'bg-blue-100' : 'bg-red-100' }
          `}>
          {
            todo.complete
              ? <IoCheckboxOutline size={30} />
              : <IoSquareOutline size={30} />
          }
          
        </div>

        <div className="text-center sm:text-left">
          { todo.description }
        </div>


      </div>
    </div>
  )
}
