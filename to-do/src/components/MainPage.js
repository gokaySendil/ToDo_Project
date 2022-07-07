import Navbar from "./NavBar";
import ToDoForm from "./ToDoForm";
import CardList from "./CardList";
import Card from "../UI/Card";
import NavBar from "./NavBar";
import { auth, db, getError } from "./database/Firebase";
import { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainPage = () => {
  const history = useNavigate();
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
      setArray([]);
      setArray(result);
      setLoding(false);
    });
  };

  useEffect(() => {
    if (auth.currentUser === null) {
      setLoding(true);
      toast.error("Please Login&Register first", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history("/signup");
    } else {
      sub(auth.currentUser.email);
    }
  }, []);

  const onAddToDo = (todoTitle) => {
    toast.success(todoTitle + " Added", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sub(auth.currentUser.email);
  };
  const onRemove = (title) => {
    toast.success(title + " Deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sub(auth.currentUser.email);
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {isLoading && (
        <div>
          <h1>Loading</h1>
        </div>
      )}
      {!isLoading && (
        <div>
          <section>
            <NavBar></NavBar>
            <ToDoForm passData={onAddToDo} />
          </section>
          <section>
            <CardList removeCards={onRemove} array={array} />
          </section>
        </div>
      )}
    </div>
  );
};

export default MainPage;
