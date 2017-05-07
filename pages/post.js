import {defaultPage} from '../src/common/hocs/defaultPage'
import Header from '../src/common/widgets/Header'

const Page = (props) => {
  console.log('props', props)
  return (
    <div>
      <p>{props.url.query.title}</p>
    </div>
  )
}

export default defaultPage({Page})
