import React from "react";
import { useState, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    console.log("Data", name, email, message);
  };

  return (
    <div className="p-10">
      {/* dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d]  */}
      {/* className="bg-[url('/src/assets/banner-laptop.png')]"> */}
      <h1 className="text-3xl sm:text-5xl text-black dark:text-white font-bold bg-clip-text text-transparent font-bold bg-gradient-to-r from-rose-400 to-purple-800 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-rose-300 to-purple-800 text-center">
        Contact
      </h1>
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name">
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
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email">
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
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message">
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
