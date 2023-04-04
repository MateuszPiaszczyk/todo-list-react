import { useHistory, useLocation } from "react-router-dom";
import Input from "../Input"
import { Wrapper } from "./styled";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("szukajka");

    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("szukajka");
        } else {
            searchParams.set("szukajka", target.value);
        }
        history.push(`${location.pathname}?${location.searchParams.toString()}`)
    };
    return (
       <Wrapper>
         <Input 
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
       />
       </Wrapper>
    );
};