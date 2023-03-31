import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Task } from "./features/tasks/Task";

export default () => (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <Link to="/zadania">Zadania</Link>
            </li>
        </ul>
        <Switch>
            <Route path="/zadania">
            <Task />
            </Route>
        </Switch>
    </nav>
    </BrowserRouter>
);