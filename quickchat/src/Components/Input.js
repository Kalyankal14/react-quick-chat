import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import { UserAuth } from "../Contexts/AuthContext";

const Input = () => {
  const [newMsg, setNewMsg] = useState("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMsg.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: newMsg,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (e) {
      console.log(e);
    }
    setNewMsg("");
  };
  return (
    <div className="bottom-0 w-full fixed bg-gray-200 py-10 shadow-lg ">
      <form onSubmit={handleSendMessage} className="containerWrap px-2 flex">
        <input
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Enter your message..."
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm"
        >
          {" "}
          Send{" "}
        </button>
      </form>{" "}
    </div>
  );
};
export default Input;
