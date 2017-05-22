import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddTodo from '../components/AddTodo'
import { addTodo } from '../actions'

const mapDispatchToProps = dispatch => ({
  addTodo: (title) => {
    dispatch(addTodo({ value: title }))
  }
})

const mapStateToProps = state => ({
  todos: state['todos'].todos
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
