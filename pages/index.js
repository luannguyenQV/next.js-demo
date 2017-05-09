import Link from 'next/link'
import Head from 'next/head'
import {defaultPage} from '../src/common/hocs/defaultPage'
import stylesheet from '../src/common/styles/styles.css'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Page = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </div>
)

export default defaultPage({Page})
