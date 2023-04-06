import { useDispatch, useSelector } from "react-redux";
import { toTask } from "../../../../routes";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  getSelectTaskByQuery,
} from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { 
  List, 
  Item, 
  Content, 
  Button, 
  StyledNavLink
} from "./styled";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => getSelectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? " ✓ " : ""}
          </Button>
          <Content done={task.done}>
            <StyledNavLink to={toTask({ id: task.id })}>{task.content}</StyledNavLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
