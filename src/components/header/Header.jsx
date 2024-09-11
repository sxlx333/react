import { useState } from "react";
import style from './Header.module.css';

const headerStyle = {
    backgroundColor: 'yellow',
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '1rem',
};

export function Header() {
    // const x = useState(99);
    // const count = x[0];
    // const setCount = x[1]; tas pats apatine eilute

    const[count, setCount] = useState(0); // usestate react perpiesia turiny. setCount kaip funkcija.

    function handleLikeClick() {
        setCount(count + 1);
    }

    function handleDislikeClick() {
        setCount(count - 1);
    }


    return (
        <header style={headerStyle}>
            <span className={style.title}> HEADER CONTENT: {count} like</span>
            <button onClick={handleLikeClick} type="button">👍</button>
            <button onClick={handleDislikeClick} type="button">👎</button>
        </header>
    );
}