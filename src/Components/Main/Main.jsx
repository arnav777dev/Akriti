import React, {useContext} from 'react'
import { Card, CardContent, CardHeader, Grid, Divider, Typography } from '@material-ui/core'
import useStyles from './styles.js'
import Form from './Form/Form.jsx'
import List from './List/List.jsx'

import { ExpenseTrackerContext } from '../../Context/Context.js'
const Main = () => {
    const classes = useStyles();

  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance ${balance}</Typography>
            <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
                {/* Infocard */}
                Try saying: Add Income for $1000 in category for salary for Monday
            </Typography>
            <Divider/>
            <Form/>
        </CardContent>
        <CardContent className={classes.cartContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main