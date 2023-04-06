import { toAuthor, toTasks } from "../../routes";
import { Item, List, StyledNavigation, StyledNavLink } from "./styled";

export const Navigation = () => {
    return (
        <StyledNavigation>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>
                        Zadania
                    </StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>
                        o Autorze
                    </StyledNavLink>
                </Item>
            </List>
        </StyledNavigation>
    );
};