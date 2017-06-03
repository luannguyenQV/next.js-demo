import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoItem from '../components/TodoItem'
import { updateTodo, deleteTodo, markAllComplete } from '../actions'

const mapDispatchToProps = dispatch => ({
  updateTodo: (todo) => {
    dispatch(updateTodo(todo))
  },
  markAsCompleted: ({ todo: newTodo, todos }) => {
    if (newTodo.completed === false) {
      dispatch(updateTodo(newTodo))
      dispatch(markAllComplete(false))
    } else {
      let completedCount = 1
      todos.forEach(todo => {
        if (todo.completed === true && newTodo.id != todo.id) {
          completedCount++
        }
      })
      dispatch(updateTodo(newTodo))
      if (completedCount === todos.length) {
        dispatch(markAllComplete(true))
      }
    }
  },
  deleteTodo: (todo) => {
    dispatch(deleteTodo(todo))
  }
})

const mapStateToProps = state => ({
  todos: state['todos'].todos
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem)
