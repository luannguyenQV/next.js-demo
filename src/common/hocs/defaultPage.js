import React,{Component} from 'react';
import Header from '../widgets/Header'

export const defaultPage = ({Page}) => class DefaultPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <Page {...this.props} />
      </div>
    )
  }
}
