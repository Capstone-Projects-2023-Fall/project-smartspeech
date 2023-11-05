import { create } from "domain";
import { createContext, useContext, useReducer, useState } from "react";


type Point = {
    x: number
    y: number
}

interface ContextProps {
    stroke: Point[],
}

const GlobalContext = createContext<ContextProps>({
    stroke: [],
})

export const GlobalContextProvider = ({children}) => {

}