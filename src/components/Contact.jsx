import React, { useContext } from "react";
import { useState, useRef } from "react";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { Alert } from "@material-tailwind/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const form = useRef();

  //Handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Emailjs setup
    emailjs.sendForm("service_wj77ttq", "template_9z931e2", form.current, "Fkc8Tki7G1b7GXpY2").then(
      (result) => {
        console.log(result.text);
        setShowAlert(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setShowAlert(true);
    e.target.reset();
    setName("");
    setEmail("");
    setMessage("");
  };

  // Event handler to close the alert
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  //Firebase/Firestore connection
  // const submitHandler = async (e) => {
  //   console.log("Data", name, email, message);
  //   e.preventDefault();

  //   try {
  //     const docRef = await addDoc(collection(db, "contact_info"), {
  //       name: name,
  //       email: email,
  //       message: message,
  //     });
  //     console.log("document written with ID: ", docRef.id);
  //   } catch (error) {
  //     console.log("error adding document: ", error);
  //   }
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };

  return (
    <div className="p-10">
      {/* dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d]  */}
      {/* className="bg-[url('/src/assets/banner-laptop.png')]"> */}
      <h1 className="text-3xl sm:text-5xl text-[#2e2c2e] font-bold  dark:text-white text-center">Contact</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
            ref={form}>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="full-name">
                First and Last Name
              </label>
              <input
                id="full-name"
                className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="user_name"
                placeholder="Name"
                required
              />
              <br />
              <br />
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="email-address">
                Email Address
              </label>
              <input
                id="email-address"
                className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <br />
              <br />
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={message}
                placeholder="Message"
                name="message"
                rows="6"
                required
                onChange={(e) => setMessage(e.target.value)}></textarea>
              <br />
              <br />
              <button
                className="bg-[#6a6365] hover:bg-[#620646] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send"
                aria-label="Submit">
                Submit
              </button>
              {showAlert && (
                <Alert
                  color="black"
                  icon={<Icon />}
                  open={open}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                  }}
                  className="rounded-none border-l-4 border-white bg-[#620646] font-medium text-white"
                  onClose={handleCloseAlert}>
                  Contact form submitted successfully.
                </Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
