import { getLatestBlog } from "../lib/contentful"

import { runtimeConfig } from "../lib/runtimeConfig"

export const config = runtimeConfig

export async function getServerSideProps(context) {
    const data = await getLatestBlog()
    return {
        props: {
            data
        }
    }
}

const LatestBlogRedir = ({data}) => {
    return (
        <meta httpEquiv="refresh" content={`0; url=/blog/${data.slug}`} />
    )
}

export default LatestBlogRedir