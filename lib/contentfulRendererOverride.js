import { BLOCKS, INLINES } from '@contentful/rich-text-types'

function getHeadingHash(text){
    return text.toLowerCase().replaceAll(" ", "-")
}

function Heading2({children, ...props}){
    return <h2 id={getHeadingHash(children[0])} {...props}>{children}</h2>
}

function Heading3({children, ...props}){
    return <h3 id={getHeadingHash(children[0])} {...props}>{children}</h3>
}

function Pr({children, ...props}) {
    return <p {...props}>{children}</p>
}

function Hpl({children, ...props}) {
    return <a {...props}>{children}</a>
}

function Im(inp) {
    const {file, title} = inp.fields
    return <img src={file.url} className="ml-auto mr-auto rounded-xl my-5" alt={title} />
}

const overrideOptions = {
    [BLOCKS.PARAGRAPH]: {
        component: Pr,
        props: {
            className: "mb-4 text-lg"
        }
    },
    [BLOCKS.EMBEDDED_ASSET]: {
        image: {
            component: Im
        }
    },
    [INLINES.HYPERLINK]: {
        component: Hpl,
        props: {
            className: "underline hover:text-primary"
        }
    },
    [BLOCKS.HEADING_2]: {
        component: Heading2,
        props: {
            className: "text-4xl mt-10 mb-3"
        }
    },
    [BLOCKS.HEADING_3]: {
        component: Heading3,
        props: {
            className: "text-3xl mt-10 mb-3"
        }
    },
}

export default overrideOptions