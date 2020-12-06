import React, { useState } from 'react';

const Phone = () => {
  const formatInput = (e, format) => {
    const formatArray = format.split("-").map((s) => s.length);

    const input = e.target.value.replaceAll("-", "");
    if (input.length >= formatArray.reduce((acc, i) => acc + i)) {
      e.target.value = e.target.value.slice(0, 12);
      return;
    }
    const regex = RegExp(`^${formatArray.map((f) => `(\\d{${f}})?`).join("")}`);
    const splited = input.split(regex).filter((i) => i);
    e.target.value = splited.join("-");
  };

  return (
      <input
        type="text"
        placeholder="Phone number"
        onChange={(e) => formatInput(e, "xxx-xxx-xxxx")}
        className="text-grey-darker focus:outline-none"
      />
  );
};

export default Phone;
