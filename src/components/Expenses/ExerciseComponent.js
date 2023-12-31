import React from 'react';
import './ExpenseItem.css';

function ExerciseComponent() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
    <div className="expense-item">
        <div>{{expenseDate.toIsoString()}}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">{expenseAmount}</div>
        </div>
    </div>
    );
}

export default ExerciseComponent;