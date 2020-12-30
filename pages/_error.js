import Layout from '../components/Layout'

const Error = ({statusCode}) => (
    <Layout title="Error!!!">
        {statusCode ? 
            <p>Could not get that page sorry error code: {statusCode}</p> :
            <p>Could not get that page sorry. :(</p> }
    </Layout>
)

export default Error;