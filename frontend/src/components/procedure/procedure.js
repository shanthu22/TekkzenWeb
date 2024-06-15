import React from "react";
import "./procedure.css";

import TZcontainer from "../atoms/TZcontainer/TZcontainer";
const Procedure = (props) => {
  const fetchedProcedureData = props.procedureData;
  //console.log(procedureData);
  return (
    <TZcontainer>
      <div className="procedure">
        <h2>Getting started with us is easy</h2>
        {fetchedProcedureData.map((item, key) => {
          return (
            <div className="procedure-step">
              <div className="procedure-step-count">
                <h3>{item.stepCount} </h3>
              </div>
              <div
                style={{
                  display: "flex",

                  flexDirection: "column",
                }}>
                <h3 className="procedure-step-Heading">{item.stepName}</h3>
                <p className="procedure-step-description">
                  {item.stepDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </TZcontainer>
  );
};

export default Procedure;
