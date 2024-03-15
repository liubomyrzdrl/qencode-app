import React, { useState} from "react";
import { Icon } from "react-icons-kit";
import { home } from 'react-icons-kit/icomoon/home'
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import "./styles.css";

const InputField = ({ value, typeField, onChange, placeholder }) => {

const [type, setType] = useState(typeField);
const [icon, setIcon] = useState(eyeOff);
  
console.log("InputField", eye)
 const handleToggle = () => { 
    if (type==='password'){
        setIcon(eye);
        setType('text')
     } else {
        setIcon(eyeOff)
        setType('password')
     }
 };

  return (
    <>
      <input
        className="input-field"
        type={typeField}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {typeField === 'password' && 
        <span className="flex justify-around items-center" onClick={handleToggle}>
        <Icon className="absolute mr-10" style={{ color: '#D3D8DC' }} icon={icon} size={25} />
      </span>}
    
    </>
  );
};

export default InputField;
