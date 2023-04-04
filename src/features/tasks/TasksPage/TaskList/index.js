import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectHideDone, toggleTaskDone, removeTask, getSelectTaskByQuery } from "../../taskSlice";
import { List, Item, Content, Button } from "./styled";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukajka");


  const tasks = useSelector(state => getSelectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item 
        key={task.id} 
        hidden={task.done && hideDone}
        >
          <Button 
          toggleDone 
          onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? " ✓ " : ""}
          </Button>
          <Content done={task.done}>
           <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button 
          remove 
          onClick={() => dispatch(removeTask(task.id))}
          >
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  )
};

export default TaskList;
