import Layout from "../components/Layout"
import {posts} from '../profile'
import Image from 'next/image'


const PostCard = ({post}: any) => (
    <div className="col-md-4">
        <div className="card">
            <div className="overflow">
            <Image priority src={`/${post.imageURL}`} alt="blog1" width={1000} height={600} layout="responsive" />
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>

                <button className="btn btn-dark">
                    Read
                </button>
            </div>
        </div>
    </div>
)

export default function Blog(): JSX.Element {
    return (
        <Layout isFooter={false}>
            <h1>Blog</h1>
            <div className="card-body">
                {posts.map((post, i) => (
                    <PostCard key={i} post={post} />
                ))}
            </div>
            
        </Layout>
    )
}
