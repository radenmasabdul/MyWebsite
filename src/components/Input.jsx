import React from "react";

function Input() {
  return (
    <input
      type="text"
      placeholder="Enter Your Name"
      className="input w-full max-w-xs bg-bg-input text-white mt-4"
    />
  );
}

function InputPhone() {
  return (
    <input
      type="text"
      placeholder="Enter Your Phone Number"
      className="input w-full max-w-xs bg-bg-input text-white"
    />
  );
}

function InputEmail() {
  return (
    <input
      type="email"
      placeholder="Enter Your Email"
      className="input w-full max-w-xs bg-bg-input text-white"
    />
  );
}

function InputSubject() {
  return (
    <input
      type="text"
      placeholder="Enter Your Subject"
      className="input w-full max-w-xs bg-bg-input text-white"
    />
  );
}

function TextArea() {
  return (
    <textarea
      className="textarea bg-bg-input w-full h-[188px] rounded resize-none text-white"
      placeholder="Type Your Messages"
    ></textarea>
  );
}

export { Input, InputPhone, InputEmail, InputSubject, TextArea };
