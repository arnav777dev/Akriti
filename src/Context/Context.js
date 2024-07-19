import React, { useReducer, createContext } from "react";
import { ContextReducer } from "./ContextReducer";
const initialState = [];
export const ExpenseTrackerContext = createContext(initialState);

const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(ContextReducer, initialState); // first is reducer which defines how we will be chnagin gthe state
  //Action crateors
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });


  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);
  return (
    <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default Provider;
