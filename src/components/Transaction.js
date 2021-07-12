import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/formatter';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';

    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.description}
                <span>{sign}${Math.abs(numberWithCommas(transaction.amount))}</span>
                <button onClick={() => deleteTransaction(transaction._id)}
                    className="delete-btn">
                    x
                    </button>
            </li>
        </div>
    )
}
