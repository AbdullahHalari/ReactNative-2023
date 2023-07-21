import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import Loading from '../components/UI/Loading';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { getExpense } from "../util/http";
import Error from '../components/UI/ErrorOverlay';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const [isfetchExpense,setIsFetchExpenses] = useState(true);
  const [isError, setError] = useState();
  useEffect(()=>{
    async function getExpenses(){
      setIsFetchExpenses(true)
      try {
        const expenses = await getExpense();
        expensesCtx.setExpenses(expenses)
        
      } catch (error) {
        setError(error)
      }

      setIsFetchExpenses(false)
      // setFetchExpenses(expenses)
    }
    getExpenses();
  },[])
  function errorHandler(){
    setError(null)
  }
  if(isError && !isfetchExpense){
    return <Error message={isError} onConfirm={errorHandler}/>
  }
  // if(isfetchExpense){ 
  //   return <Loading />
  // }
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    // console.log(today)
    const date7DaysAgo = getDateMinusDays(today,7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
