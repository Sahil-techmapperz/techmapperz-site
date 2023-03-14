import React, { useEffect, useState } from 'react';
function Toaster(props) {
  return (
    <div  className={`${props.type=="success"?"success_toster":"Error_toster"}`}>
      <h3>{props.heading}</h3>
      <p>{props.title}</p>
    </div>
  );
}

export default Toaster;