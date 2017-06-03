import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddTodo from '../components/AddTodo'
import { addTodo, updateTodo, markAllComplete } from '../actions'

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo))
    dispatch(markAllComplete(false))
  },
  updateAllTodoCompleted: ({ todos, markAllCompleted }) => {
    todos.map(todo => dispatch(updateTodo(
      Object.assign({}, todo, { completed: !markAllCompleted })
    )))
    dispatch(markAllComplete(!markAllCompleted))
  }
})

const mapStateToProps = state => ({
  todos: state['todos'].todos,
  markAllCompleted: state['todos'].markAllCompleted
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
