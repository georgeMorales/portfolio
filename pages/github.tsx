import Layout from "../components/Layout"
import Image from 'next/image';
import Error from './_error';


interface Props {
    user: object;
    
}

interface User {
    name: string
}

export default function github({user, statusCode}: any) {

    console.log('user', user)
    const {name, avatar_url, bio, blog, html_url} = user

    //console.log(name)

    if (statusCode) {
        return (
            <Error status={statusCode} />
        )
    }
    return (
        <Layout isFooter={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{name}</h1> 
                        <Image priority src={avatar_url} alt="portfolio2" width={2400} height={2400} layout="responsive" />
                        <p>{bio}</p>
                        <a href={html_url} rel="noreferrer" target="_blank" className="btn btn-outline-secundary my-2">GitHub</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch('https://api.github.com/users/georgeMorales')
    const data = await res.json();

    console.log('res status', res.status)

    const statusCode = res.status > 200 ? res.status : false

    //console.log(data)

    return {
        props: {
            user: data,
            statusCode
        }
    }
}
