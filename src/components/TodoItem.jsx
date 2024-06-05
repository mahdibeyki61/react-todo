import { useState } from "react";
import DeleteIcons from "./Icons/DeleteIcoms";
import EditIcons from "./Icons/EditIcons";


export default function TodoItem( {todo ,deleteTodo ,toggleTodoStatus ,editTodoTitle} ){

    const [EditMode , setEditMode] = useState(false)
    const editTodoHandler = (event) => {
       if(event.key == 'Enter')  {       
            editTodoTitle(todo , event.target.value)
            setEditMode (false);
            }   
        }

    return(
        <li className="relative flex items-center justify-between px-2 py-6 border-b">

            { EditMode
                ?
                    <div className="w-full flex items-center">
                        <input type="text" defaultValue={todo?.title} onChange={() => {}} onKeyDown= {editTodoHandler}   className="w-full px-4 py-2 border-gray-400 rounded" />
                        <DeleteIcons className="ml-2" onClick= {() =>setEditMode(false)  } />
                    </div>
                : 
                ( 
                 <div className="flex items-center">
                    <div>
                        <input type="checkbox" checked={todo ?. status} onChange={() => toggleTodoStatus(todo)}  className="" />
                        <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo?.status ? 'line-through' : ''}`}>{todo ?. title}</p>
                    </div>
                        <button type="button" className="absolute right-0 flex items-center space-x-1">
                            <EditIcons onClick={() => setEditMode(todo) } />
                            <DeleteIcons onClick={() => deleteTodo(todo) } />
                        </button> 
                 </div>
                )  
             }
        </li>
       
    ) 
   
}     