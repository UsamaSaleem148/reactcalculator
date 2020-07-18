import React from 'react';
import "./Buttons.css";

const isOperator = val => {
    return !isNaN(val) || val === "=";
}

export const Button = props => (
    <div
    className = {`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    onClick = {() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
);