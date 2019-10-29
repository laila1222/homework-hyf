import React from 'react';

export default function({type, name, value, onChange, onClick, checked, required}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      checked={checked}
      required={required}
    />
  );
}
