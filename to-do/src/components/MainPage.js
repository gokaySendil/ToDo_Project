import Navbar from "./NavBar";
import ToDoForm from "./ToDoForm";
import CardList from "./CardList";
import Card from "../UI/Card";
import NavBar from "./NavBar";
import { auth, db } from "./database/Firebase";
import { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

const MainPage = () => {
  const [isLoading, setLoding] = useState(true);
  const [array, setArray] = useState([]);
  const sub = async (email) => {
    var result = [];
    await onSnapshot(doc(db, "users", email), (doc) => {
      var data = doc.data().todos;
      data.forEach((element) => {
        Object.keys(element).map(() => {
          result.push(element["title"]);
        });
      });
      setArray(result);
      setLoding(false);
    });
  };

  useEffect(() => {
    sub(auth.currentUser.email);
  }, []);

  const onAddToDo = (obj) => {
    setArray([...array, obj["title"]]);
    updateDoc(doc(db, "users", auth.currentUser.email), {
      todos: arrayUnion(obj),
    });
  };
  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && (
        <div>
          <section>
            <NavBar></NavBar>
            <ToDoForm passData={onAddToDo} />
          </section>
          <section>
            <CardList array={array} />
          </section>
        </div>
      )}
    </div>
  );
};

export default MainPage;
