import axios from "axios";

export async function storeExpense(expenseData){
   const response = await axios.post("https://olxbyabdullah.firebaseio.com/expenses.json",expenseData);
    const id = response.data.name;
    return id;
}

export async function getExpense() {
  const response = await  axios.get("https://olxbyabdullah.firebaseio.com/expenses.json");
    console.log(response.data)
  const expenses=[]
  for(const key in response.data){  
  const expenseObj = {
        id: key,
        amount:response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description
    }
    expenses.push(expenseObj);
}
return expenses;
}
export async function updateExpense(id,expenseData){
  return axios.put(`https://olxbyabdullah.firebaseio.com/expenses/${id}.json`,expenseData);
}

export async function deleteExpense(id){
  return axios.delete(
    `https://olxbyabdullah.firebaseio.com/expenses/${id}.json`
  );
}