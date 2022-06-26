import Navbar from "./NavBar";
import ToDoForm from "./ToDoForm";
import CardList from "./CardList";
import Card from "../UI/Card";
import NavBar from "./NavBar";
const MainPage = () => {
  return (
    <div>
      <section>
        <NavBar></NavBar>
        <ToDoForm />
      </section>
      <section>
        <CardList />
      </section>
    </div>
  );
};

export default MainPage;
