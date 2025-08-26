import React from 'react';
import MenuItem from './MenuItem';  

function Menu() {
    return (
        <div className="menucontainer">
            <h1>The React Bistro </h1>
                <h2>Our Menu </h2>
            <MenuItem
                itemName="The State Burger"
                price={15.99}
                description="A classic beef burger, representing the
foundational state of any good meal."

            />
            <MenuItem
                itemName="Propsperoni Pizza"
                price={18.50}
                description="A delicious pizza where each slice (component) gets
its toppings (props) from the main pie."
            />

            <MenuItem
                itemName="Component Carbonara"
                price={16.75}
                description="A wellstructured pasta, where each ingredient is a
selfcontained component."
/>

            </div>
        );
    }
       export default Menu;
