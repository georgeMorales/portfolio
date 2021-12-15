import Layout from '../components/Layout';

export default function _error({status}: any) {
    return (
        <Layout isFooter={false}>
            <p className="text-center">Could not load your page</p>
            <h1 className="text-center">{status}</h1>
        </Layout>
    )
}
