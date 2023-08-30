/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}