import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// We can wrtie date, title and amount instead of props in curely bracket like destucruing
function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // //   const [amount, setAmount] = useState(props.amount);
  // const clickHandelr = () => {
  //   setTitle("Updated!");
  // };

  // //   const changeValue = () => {
  // //     setAmount(30);
  // //   };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickHandelr}>Change Title</button> */}

      {/* <div>
        <h2>{amount}</h2>
        <button onClick={changeValue}>Apply discount</button>
      </div> */}
    </Card>
  );
}

export default ExpenseItem;
