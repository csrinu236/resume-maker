import React from 'react';

const Highlight = ({ children }) => {
  return (
    <>
      {children.split(' ').map((word) => {
        return <i className="highlight">{word}</i>;
      })}
    </>
  );
};

export default Highlight;
