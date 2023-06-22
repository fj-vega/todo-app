import Layout from "./components/Layout";
import Header from "./components/Header";
import TodoListControls from "./components/controls/TodoListControls";
import TodoList from "./components/list/TodoList";

const App = () => {
  return (
    <Layout>
      <Header />
      <TodoListControls />
      <TodoList />
    </Layout>
  );
};

export default App;
