import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionForm = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState()

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            description,
            amount,
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">  Description</label>
                    <input type="text"
                        onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter description..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number"
                        onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
