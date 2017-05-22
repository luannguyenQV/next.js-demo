import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
  todos: state['todos'].todos
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)