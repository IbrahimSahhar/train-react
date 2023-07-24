import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Tasks from "./pages/Tasks";
import TodoList from "./pages/TodoList";
import Counters from "./pages/Counters";
import Form from "./pages/Form";
import Products from "./pages/Products";

function App() {
  const func = (child) => {
    console.log(child);
  };
  return (
    <div className="App">
      <Home />
      {/* <About /> */}
      {/* <Tasks /> */}
      {/* <Footer /> */}
      {/* <TodoList /> */}
      {/* <Counters /> */}
      {/* <Form /> */}
      {/* <Products func={func} /> */}
    </div>
  );
}

export default App;
