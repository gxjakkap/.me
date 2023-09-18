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
    return (<p {...props}>{children}</p>)
}

function Hpl({children, ...props}) {
    return <a {...props}>{children}</a>
}

function Im(inp) {
    const {file, title} = inp.fields
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={file.url} className="mx-auto my-5 rounded-xl" alt={title} />
}

const overrideOptions = {
    [BLOCKS.PARAGRAPH]: {
        component: Pr,
        props: {
            /* style: "margin-bottom: 1rem;font-size: 1.125rem;line-height: 1.75rem;" */
            style: {marginBottom: '1rem', fontSize: '1.125rem', lineHeight: '1.75rem'}
        }
    },
    [BLOCKS.EMBEDDED_ASSET]: {
        image: {
            component: Im,
            props: {
                style: {marginTop: '1rem', marginBottom: '1rem'}
            }
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
            /* className: "text-4xl mt-10 mb-3" */
            style: {marginBottom: '0.75rem', marginTop: '2.5rem', fontSize: '2.25rem', lineHeight: '2.5rem'}
        }
    },
    [BLOCKS.HEADING_3]: {
        component: Heading3,
        props: {
            style: {marginBottom: '0.75rem', marginTop: '2.5rem', fontSize: '1.875rem', lineHeight: '2.25rem'}
        }
    },
}

export default overrideOptions