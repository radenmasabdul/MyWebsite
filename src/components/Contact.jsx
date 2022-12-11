import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  Input,
  InputPhone,
  InputEmail,
  InputSubject,
  TextArea,
} from "../components/Input";
import { ButtonsSendMessages } from "../components/Buttons";

export const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message successfully sent",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
  };

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPhone(onlyDigits);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="card w-full bg-bg-card rounded-md"
    >
      <div className="card-body space-y-4">
        <div className="lg:grid grid-cols-2 gap-4 md:grid-flow-row space-y-4">
          <Input onChange={(e) => setName(e.target.value)} value={name} />
          <InputPhone
            onChange={(e) => {
              checkInput(e.target.value);
              setPhone(e.target.value);
            }}
            value={phone}
          />
          <InputEmail
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <InputSubject
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
        </div>
        <div className="lg:grid grid-cols-1 gap-2 md:grid-flow-row my-2">
          <TextArea
            onChange={(e) => setMessages(e.target.value)}
            value={messages}
          />
        </div>
        <div className="grid grid-cols-1">
          <ButtonsSendMessages />
        </div>
      </div>
    </form>
  );
};

export default Contact;
