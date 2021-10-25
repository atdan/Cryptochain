import React from 'react';

// destructured props.transaction as {transaction}
const Transaction = ({transaction}) => {
    const {input, outputMap} = transaction;
    const recipients = Object.keys(outputMap);

    return (
        <div className='Transaction'>
            <div>
                From: {`${input.address.substring(0,20)}...`} | Balance: {input.amount}
            </div>
            {
                recipients.map(recipient => 
                    // {
                    // return(
                        (
                        <div key={recipient}>
                            To: {`${recipient.substring(0,20)}...`}
                        </div>
                    )
                // }
                )
            }
        </div>
    )
} 
export default Transaction;