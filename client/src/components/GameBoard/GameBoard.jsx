import React from "react";
import { useSelector } from "react-redux";


export function GameBoard() {
    const games = useSelector((state) => state.games)

    console.log(games)

    return(
        <h1>Board</h1>
    )
}