import React from 'react'

const BillItem = () => {
    return (
        <div className='flex justify-between items-center py-4'>
            <div>
                <h5 className='text-slate-50 text-sm'>Professional Plan</h5>
                <p className='text-slate-400 text-sm'>Monthly Subscription</p>
            </div>
            <h5>$15.00</h5>
        </div>
    )
}

export default BillItem