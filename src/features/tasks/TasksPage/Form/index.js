import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Input";
import { addTask } from "../../taskSlice";
import { StyledForm, Button } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dsipatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const contentTrimmed = newTaskContent.trim();

    if (contentTrimmed === "") {
      return;
    }

    dsipatch(addTask({
      content: contentTrimmed,
      done: false,
      id: nanoid(),
    }));
   
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Wpisz jakieś zadanie"
        onChange={({ target }) => setNewTaskContent(target.value)}
        autoFocus
      />

      <Button className="form__button">Dodaj zadanie</Button>
    </StyledForm>
  );
};
export default Form;
