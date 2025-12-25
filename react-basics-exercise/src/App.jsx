import UserProfile from "./UserProfile";
import Card from "./Card";
import Accordion from "./Accordion";
import Counter from "./Counter";
import Login from "./Login";
import TodoApp from "./ToDoApp";
import "./App.css";

function App() {
  const user1 = {
    name: "Pham Khoi Nguyen",
    email: "khoinguyen@gmail.com",
    avatarUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const user2 = {
    name: "Tran Ngoc Thao Vy",
    email: "thaovyvy13@gmail.com",
    avatarUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    <div className="app-container">
      <Card title="Profile: Pham Khoi Nguyen">
        <UserProfile userData={user1} />
      </Card>

      <Card title="Profile: Tran Ngoc Thao Vy">
        <UserProfile userData={user2} />
      </Card>

      <Accordion />
      <Counter />
      <Login />
      <TodoApp />
    </div>
  );
}

export default App;
