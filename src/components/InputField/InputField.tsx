import React, { useState} from "react";
import { Icon } from "react-icons-kit";
import { home } from 'react-icons-kit/icomoon/home'
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import "./styles.css";

const InputField = ({ register, typeField, placeholder }) => {

const [type, setType] = useState(typeField);
const [icon, setIcon] = useState(eyeOff);
  
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
        type={type}
        placeholder={placeholder}
        {...register(typeField, { required: true, maxLength: 20 })}
      />
      {typeField === 'password' && 
        <span className="hide-password-icon" onClick={handleToggle}>
        <Icon  style={{ color: '#67717B' }} icon={icon} size={15} />
      </span>}
    
    </>
  );
};

export default InputField;
