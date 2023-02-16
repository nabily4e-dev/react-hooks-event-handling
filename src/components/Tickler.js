import React from "react";

function Tickler() {
    function tickle() {
        console.log("Teehee!");
    }

    return <button onClick={tickle}>Tickle me!</button>;
    // return <button onClick={() => console.log("Teechee!")}>Tickle me!</button>;

}

export default Tickler;
