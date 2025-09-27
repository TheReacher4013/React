import React, { useRef } from "react";

const Form = () => {
    const userName = useRef();
    const select = useRef();

    console.log(userName.current);

    return (
        <div>
            <select
                ref={select}
                onChange={() => console.log(select.current.value)}>
                <option value="all">All</option>
                <option value="action">Action</option>
                <option value="submit">Submit</option>
                <option value="submit">Submit</option>
                <option value="button">button</option>
                <option value="thriller">thriller</option>
                <option value="horror">horror</option>
                <option value="comedy">comedy</option>
            </select>

            <input
                type="text"
                onChange={() => console.log(userName.current.value)}/>
            <input type="text"
                onChange={()=>console.log(userName.current.value)}/>
            <input type="text"
                onChange={() => console.log(userName.current.value)}/>
            <input type="text"
                onChange={() => console.log(userName.current.value)}/>
            <input type="text"
                onChange={() => console.log(userName.current.value)}/>
            <input type="text"
                ref={userName}
                onChange={() => console.log(userName.current.value)}/>
        </div>
    );
};

export default Form;