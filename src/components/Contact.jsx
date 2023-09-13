import React from "react";
import { useState, useRef } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="text-white dark:text-white font-bold p-10">
      {/* dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d]  */}
      {/* className="bg-[url('/src/assets/banner-laptop.png')]"> */}
      <h1 className="text-3xl sm:text-5xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-rose-400 to-purple-800 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-rose-300 to-purple-800 text-center">
        Contact
      </h1>
    </div>
  );
};

export default Contact;
