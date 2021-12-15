import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'

import { skills, experiences, projects } from '../profile';
import Link from 'next/link'

const Index: NextPage = () => {

    return (
        <Layout>
            <header className="container">
                <div className="col-md-12">
                    <div className="card card-body bg-secundary">
                        <div className="row">
                            <div className="col-md-4">
                                <Image src="/yo.jpg" alt="photo" width={200} height={200} className="img-fluid" />
                            </div>
                            <div className="col-md-4">
                                <h1>Jorge Morales</h1>
                                <h2>Fullstack Developer</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta reprehenderit veniam dolores sapiente culpa, quis quod esse dolorum perspiciatis consequuntur ratione! Illum dolorum architecto nulla, debitis sed itaque fuga.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/**Second secction */}
            <section className="container">
                <div className="row py-2">
                    <div className="col-md-4">
                        <div className="card bg" style={{height: '100%'}}>
                            <div className="card-body">
                                <h1>Skill</h1>
                                {skills.map(({skill, percentage}, i) => (
                                    <div className="py-3" key={i}>
                                        <h5>{skill}</h5>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: `${percentage}%`}} />
                                        </div>
                                    </div>
                                ))}
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card bg">
                            <div className="card-body">
                                <h1>Experiencia</h1>
                                <ul>
                                    {
                                        experiences.map(({title, description, from, to}, i) => (
                                            <li key={i}>
                                                <h3>{title}</h3>
                                                <h5>{from} - {to}</h5>
                                                <p>{description}</p>
                                            </li>
                                        ))
                                    }
                                    
                                </ul>
                                <Link href="/blog">
                                    <a  className="btn btn-light">Know more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**Portfolio */}
            <section className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-secundary">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center">Portfolio</h1>
                                </div>

                                
                                    {projects.map(({title, description, image}, i) => (
                                        <div className="col-md-4" key={i}>
                                            <div className="card">

                                                <Image src={`/${image}`} alt="portfolio1" width={200} height={200} className="card-img-top" />
                                               
                                                <div className="card-body">
                                                    <h3>{title}</h3>
                                                    <p>{description}</p>
                                                    <a href="#!">Know more</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <Link href="/blog">
                                <a  className="btn btn-light">Know more</a>
                            </Link>
                        </div>
                    
                    </div>
                   
                </div>
            </section>
        </Layout>
    )
}

export default Index
