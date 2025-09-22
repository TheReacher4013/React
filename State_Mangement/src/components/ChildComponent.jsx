import React, { useEffect } from "react";
import Counter from "./Counter";

const ChildComponent = (props) => {
    console.log("Child Component");
    return (
        <section>
            <div>
                <Counter count={props.count} />
            </div>
        </section>
    );
};

export default ChildComponent;