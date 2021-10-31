import "./App.css";
import Form from "./components/Form/Form";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Answer from "./components/Answer/Answer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Form} exact />
      <Route path="/answer" component={Answer} exact />
    </BrowserRouter>
  );
}

export default App;
