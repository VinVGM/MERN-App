import { useExpensesContext } from "../hooks/useExpensesContext"
import { useAuthContext } from "../hooks/useAuthContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ExpenseDetails = ({ expense }) => {

    const { dispatch } = useExpensesContext()
    const { user } = useAuthContext()

    
    const handleClick = async () => {

        if(!user){
            return
        }
        const response  = await fetch('/api/expenses/' + expense._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_EXPENSE', payload: json})
        }
    }
    
    
    
    return(
        <div className="expense-details">
            <h4>{expense.title}</h4>
            <p><strong className="sub-heading">Amount (in Rs.): </strong>{expense.amount}</p>
            <p><strong className="sub-heading">Payment Type: </strong>{expense.paymentType}</p>
            <p>{formatDistanceToNow(new Date(expense.createdAt), {addSuffix: true})}</p>
            <span className = 'material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}


export default ExpenseDetails