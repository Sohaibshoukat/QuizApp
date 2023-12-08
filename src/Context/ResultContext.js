'use client'
import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
    const [correctPercentage, setCorrectPercentage] = useState(0);

    const updateCorrectPercentage = (percentage) => {
        setCorrectPercentage(percentage);
    };


    return (
        <ResultContext.Provider value={{ correctPercentage, updateCorrectPercentage }}>
            {children}
        </ResultContext.Provider>
    );
};

const useResult=()=>useContext(ResultContext)

export default useResult
