import Layout from "../components/Layout";
import Link from "next/link";

export default function custom404() {
    return (
        <Layout>
           <div className="text-center">
                <h1>404</h1>
                <p>This page does not exists. Please return to <Link href="/"><a>Home</a></Link></p>
           </div>
        </Layout>
    )
}
