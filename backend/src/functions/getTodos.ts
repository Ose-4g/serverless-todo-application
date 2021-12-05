import { TodoItem } from '../models/TodoItem'
import todosAccess from '../helpers/todosAccess';


const getTodos = async(userId:string)=> {
   
      const items = await todosAccess.getTodoItems(userId)
     
      return items as TodoItem[]
}

export default getTodos