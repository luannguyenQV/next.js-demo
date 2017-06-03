import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const filters = {
  completed: todo => todo.completed === true,
  active: todo => todo.completed === false,
  all: todo => todo
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
  todos: state['todos'].todos.filter(filters[state['todos'].filter])
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)