import TodoItem from "./TodoItem";

export default function TodoList({todos , deleteTodo ,toggleTodoStatus ,editTodoTitle}){


    return(
         <ul className="list-reset">
                {todos.map(( todo , index) => <TodoItem key={index} todo={todo} deleteTodo = {deleteTodo} toggleTodoStatus= {toggleTodoStatus} editTodoTitle={editTodoTitle}/>) }
        </ul>
    )
}