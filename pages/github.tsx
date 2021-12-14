import Layout from "../components/Layout"
import Image from 'next/image';

interface Props {
    user: object;
    
}

interface User {
    name: string
}

export default function github({user}: any) {

    console.log('user', user)
    const {name, avatar_url} = user

    //console.log(name)
    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{name}</h1> 
                        <Image src={avatar_url} alt="portfolio2" layout="fill" className="card-img-top" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch('https://api.github.com/users/georgeMorales')
    const data = await res.json();

    //console.log(data)

    return {
        props: {
            user: data
        }
    }
}
