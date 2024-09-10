import { useState } from "react";

const headerStyle = {
    backgroundColor: 'yellow',
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '0',
};

export function Header() {
    // const x = useState(99);
    // const count = x[0];
    // const setCount = x[1]; tas pats apatine eilute

    const[count, setCount] = useState(0); // usestate react perpiesia turiny. setCount kaip funcika.

    function handleLikeClick() {
        setCount(count + 1);
    }

    function handleDislikeClick() {
        setCount(count - 1);
    }


    return (
        <header style={headerStyle}>
            MAIN HEADER: {count} like 
            <button onClick={handleLikeClick} type="button">👍</button>
            <button onClick={handleDislikeClick} type="button">👎</button>
        </header>
    );
}