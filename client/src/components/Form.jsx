import React, { useRef, useState } from "react";
import "./FormStyle.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [input, setInput] = useState({})


  const handleInput = (e) => {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uws5g28",
        "template_gka5u95",
        form.current,
        "Hkxzs8gckjVzFVEcc"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset()
       
        },
        (error) => {
          console.log(error.text);
        }
       
      );
      
  };

  return (
    <div className="form">
      <form
        ref={form}
        onSubmit={() => {
          sendEmail()
       
        }}
      >
        <label htmlFor="">Your Name</label>
        <input type="text" name="user_name" onChange={handleInput} />
        <label htmlFor="">Email</label>
        <input type="email" name="user_email" onChange={handleInput} />
        <label htmlFor="">Subject</label>
        <input type="text" name="user_subject" onChange={handleInput}/>
        <label htmlFor="">Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
