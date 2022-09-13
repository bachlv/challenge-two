import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Rows({ cols }) {
  const currentRow = [];
  for (let i = 0; i < cols; i++) {
    currentRow.push(
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          aspectRatio: 1,
        }}
      >
        Square
      </div>
    );
  }
  return currentRow;
}

function ChallengeTwo() {
  const [radius, setRadius] = useState(1);
  const [squares, setSquare] = useState(1);

  useEffect(() => {});

  return (
    <>
      <h1>Challenge 2</h1>

      <label>Enter circle radius: </label>
      <input
        type="number"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />

      <br />

      <label>Enter number of square: </label>
      <input
        type="number"
        value={squares}
        onChange={(e) => setSquare(e.target.value)}
      />

      <div
        className="target"
        style={{
          background: "black",
          width: "2rem",
          aspectRatio: 1,
        }}
      ></div>

      {/* <div style={{ padding: "2rem" }}>
        {(() => {
          const arrCols = [];
          for (let i = 0; i < rows; i++) {
            arrCols.push(
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  width: "100%",
                  margin: "2rem 0 2rem",
                }}
              >
                <Rows cols={cols} />
              </div>
            );
          }
          return arrCols;
        })()}
      </div> */}
    </>
  );
}

ReactDOM.render(<ChallengeTwo />, document.getElementById("root"));
