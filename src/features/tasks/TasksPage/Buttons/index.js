import { useDispatch, useSelector } from "react-redux";
import {
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
  setAllDone,
  toggleHideDone,
} from "../../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Wyświetl" : "Ukryj"} ukonczone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Zakończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
