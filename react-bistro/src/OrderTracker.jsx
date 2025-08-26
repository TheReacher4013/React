import React, { useState } from 'react';

function OrderTracker() {
    const [totalItems, setTotalItems] = useState(0);

    const handleAddItem = () => {
        setTotalItems(totalItems + 1);
    };
    return (
        <div className="ordertracker">
            <h3>Your Order</h3>
            <p>Total Items Added: {totalItems}</p>
        </div>
    );
}

export default OrderTracker;
