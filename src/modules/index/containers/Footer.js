import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from '../components/Footer'
import { setFilter, deleteTodo } from '../actions'

const countActives = (todos) => {
  let count = 0
  todos.forEach(todo => todo.completed === false ? count++ : count)
  return count
}

const mapDispatchToProps = dispatch => ({
  setFilter: (filter) => {
    dispatch(setFilter(filter))
  },
  deleteAllCompletedTodos: (todos) => {
    todos.map(todo => { if (todo.completed === true) { 
      dispatch(deleteTodo(todo.id)) 
    }})
  }
})

const mapStateToProps = state => ({
  todos: state['todos'].todos,
  filter: state['todos'].filter,
  actives: countActives(state['todos'].todos)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
