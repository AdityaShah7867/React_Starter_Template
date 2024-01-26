import React, { useEffect, useRef } from "react";
import ButtonDoc from "./Buttons";
import CardDoc from "./Card";
import Dash from "./Dash";


const Document = () => {
  

  return (
    <div className="mb-12">
    <ButtonDoc/>
    <CardDoc/>
    <Dash/>
    </div>
  );
};

export default Document;
