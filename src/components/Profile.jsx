import React from "react";

function Profile({ hi, firstName, lastName, title, desc }) {
  return (
    <>
      <p className="text-white font-bold text-[40px] ">{hi} </p>
      <p className="text-white font-extrabold text-[40px]">
        {firstName}{" "}
        <span className="text-bg-iconbtn font-extrabold text-[40px]">
          {lastName}
        </span>
      </p>
      <p className="text-white font-semibold text-2xl">{title}</p>
      <p className="text-white font-normal text-base pr-0 mt-5 mb-9 lg:pr-64">
        {desc}
      </p>
    </>
  );
}

export default Profile;
