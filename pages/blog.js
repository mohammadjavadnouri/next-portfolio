import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({slug, title}) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}><a>{title}</a></Link>
    </li>
)

const Blog = () => (
    <Layout title="Blog">
        <ul>
            <PostLink slug="react" title="React post"/>
            <PostLink slug="angular" title="Angular post"/>
            <PostLink slug="vue" title="Vue post"/>
        </ul>
    </Layout>
    
)

export default Blog