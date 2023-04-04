import { useDispatch, useSelector } from "react-redux";
import 
{ 
    fetchExampleTasks, 
    selectAreTasksEmpty, 
    selectHideDone, 
    selectIsEveryTaskDone, 
    setAllDone, 
    toggleHideDone
 } from "../../taskSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
   
    const dispatch = useDispatch();
   
    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
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