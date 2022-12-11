import React, { useState } from "react";

function Input() {
  return (
    <input
      type="text"
      placeholder="Enter Your Name"
      className="input w-full max-w-xs bg-bg-input text-white mt-4"
      name="user_name"
      required
    />
  );
}

function InputPhone() {
  return (
    <input
      type="tel"
      maxLength="15"
      placeholder="Enter Your Phone Number"
      className="input w-full max-w-xs bg-bg-input text-white"
      name="user_phone"
      required
    />
  );
}

function InputEmail() {
  return (
    <input
      type="email"
      placeholder="Enter Your Email"
      className="input w-full max-w-xs bg-bg-input text-white"
      name="user_email"
      required
    />
  );
}

function InputSubject() {
  return (
    <input
      type="text"
      placeholder="Enter Your Subject"
      className="input w-full max-w-xs bg-bg-input text-white"
      name="user_subject"
      required
    />
  );
}

function TextArea() {
  return (
    <textarea
      className="textarea bg-bg-input w-full h-[117px] rounded resize-none text-white"
      placeholder="Type Your Messages"
      name="messages"
      required
    ></textarea>
  );
}

export { Input, InputPhone, InputEmail, InputSubject, TextArea };
