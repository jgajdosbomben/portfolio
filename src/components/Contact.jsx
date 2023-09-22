import React from "react";
import { useState, useRef } from "react";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    console.log("Data", name, email, message);
    e.preventDefault();

    const docRef = await addDoc(collection(db, "contact-form"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("document written with ID: ", docRef.id);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="p-10">
      {/* dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d]  */}
      {/* className="bg-[url('/src/assets/banner-laptop.png')]"> */}
      <h1 className="text-3xl sm:text-5xl text-[#2e2c2e] font-bold  dark:text-white text-center">Contact</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <br />
              <br />
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <br />
              <br />
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={message}
                placeholder="Message"
                rows="6"
                onChange={(e) => setMessage(e.target.value)}></textarea>
              <br />
              <br />
              <button
                className="bg-[#6a6365] hover:bg-[#620646] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
