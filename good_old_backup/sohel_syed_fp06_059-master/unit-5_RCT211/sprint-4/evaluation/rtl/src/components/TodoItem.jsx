const TodoItem = ({ title, status }) => {
  return (
    <div data-testid="todo-item">
      <h2 data-testid="todo-title">Title:{title}</h2>
      <h3 data-testid="todo-status">{status ? "Completed" : "Pending"}</h3>
    </div>
  );
};

export default TodoItem;
