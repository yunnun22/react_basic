
const Todo = (props) => { 
const {todos, updateTodo, deleteTodo} = props;

return(
    <>
    {todos ? todos.map((todo) => {
            return (
              <div className='todo' key={todo.id}>
                <h3>
                  <label
                    className={todo.completed ? 'completed' : null}
                    onClick={() => updateTodo(todo.id)}
                  >
                    {todo.todoname}
                  </label>

                  <label
                 onClick={()=>{
                    deleteTodo(todo.id);
                  }}
                  >
                    &nbsp;&nbsp;&nbsp;삭제
                    </label>
                </h3>
              </div>
            );
          })
        : null}
        </>
    );

};

export default Todo;

