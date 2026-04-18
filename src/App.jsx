import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>404 - Página não encontrada</Route>
    </Switch>
  );
}

export default App;
