import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';
import Card from '../UI/Card';
import { useState } from 'react';
export default function ExpensesItems(props){   

    const [title,setTitle]=useState(props.title)
    const deleteBtn=()=>{
        setTitle("updated !");
        console.log(title)
    }
    return(
        <Card className='expense-item'>
             <ExpenseDate date={props.date} />
             <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs.{props.amount}</div>
             </div>
             <button onClick={deleteBtn}>Change Title</button>
        </Card>   
    )
}