import React from "react";
import { useState, useContext } from "react";
import { ExpenseTrackerContext } from "../../../Context/Context";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";
import { v4 as uuid} from "uuid";
import { incomeCategories, expenseCategories } from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};
const Form = () => {
  const {addTransaction} = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const classes = useStyles();
  
  const createTransaction=()=>{
    const transaction = {...formData, amount: Number(formData.amount), id: uuid()}
    addTransaction(transaction);
    setFormData(initialState);
  }

  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle1" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            {selectedCategories.map((c)=><MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField value={formData.amount} onChange={(e)=>setFormData({...formData, amount: e.target.value})} type="number" label="Amount" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField value={formData.date} onChange={(e)=>setFormData({...formData, date: formatDate(e.target.value)})} type="date" label="Date" fullWidth />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
