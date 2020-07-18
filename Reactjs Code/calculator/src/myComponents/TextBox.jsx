import React from 'react';
import "./TextBox.css";

export const Input = (props) => (
<div className="input">{props.input}</div>
);

export const ClearButton = (props) => (
<div className="clearBtn" onClick={props.handleClear}>{props.children}</div>
    );