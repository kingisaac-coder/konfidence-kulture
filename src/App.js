import React, { useState } from "react";
import "./App.css";
import newImg from "./IMG-20221229-WA0001.jpg";
import decor from "./6f222001e0d05a97c38a01e2a2b5db57-removebg-preview (1).png";
import image from "./9666b629f91555b2c611aa5632125bae-removebg-preview.png";
import { db } from "./firbase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const notify = () => {
    toast(" 🎉 You have successfully applied for an Invitation");
  };

  const sub = (e) => {
    e.preventDefault();
    // Add data to the store
    db.collection("Inivities")
      .add({
        name: name,
        Email: email,
        number: number,
      })
      .catch((error) => {
        console.error("Error Applying for invitation: ", error);
      });
  };

  return (
    <div className="app">
      <img src={decor} alt="" className="decor" />

      <div className="appBody">
        <img src={newImg} alt="" />
      </div>
      <div className="forms">
        <form
          onSubmit={(event) => {
            sub(event);
          }}
        >
          <input
            type="text"
            placeholder="Input your full name here"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="Input your Email here"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Input your Phone number here"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
          />
          <button onClick={notify} type="submit" className="btn">
            Submit to get invitation
          </button>
        </form>
      </div>
      <ToastContainer />
      <h2 className="footer">Enter your details to get invited</h2>
      <div className="img">
        <img src={image} alt="" className="images" />
      </div>
    </div>
  );
}

export default App;
