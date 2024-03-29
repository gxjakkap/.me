import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Radium from 'radium'
import { Component } from 'react'

function getHeadingHash(text){
    return encodeURIComponent(text.toLowerCase().replaceAll(" ", "-"))
}

function Heading2({children, ...props}){
    const headingHash = getHeadingHash(children[0])
    return <h2 id={headingHash} {...props}><a className='hover:underline' href={`#${headingHash}`}>{children}</a></h2>
}

function Heading3({children, ...props}){
    const headingHash = getHeadingHash(children[0])
    return <h3 id={headingHash} {...props}><a className='hover:underline' href={`#${headingHash}`}>{children}</a></h3>
}

function Pr({children, ...props}) {
    return (<p {...props}>{children}</p>)
}

/* function Hpl({children, ...props}) {
    const style = {
        textDecorationLine: 'underline', 
        overflowWrap: 'break-word',
        ':hover': {
            color: 'oklch(var(--p))'
        }
    }
    return Radium(<a style={style} {...props}>{children}</a>)
} */

// why tf radium needed a class component?
class Hpl extends Component {
    style = {
        textDecorationLine: 'underline', 
        overflowWrap: 'break-word',
        ':hover': {
            color: 'oklch(var(--p))'
        }
    }
    render() {
        console.log(this.props)
        return (
            <a style={this.style} href={this.props.href} target='_blank' rel='noopener noreferrer'>{this.props.children}</a>
        )
    }
}

function Im(inp) {
    const {file, title} = inp.fields
    // eslint-disable-next-line @next/next/no-img-element
    return <img style={{marginTop: '1rem', marginBottom: '1rem'}} src={file.url} className="mx-auto my-5 rounded-xl" alt={title} />
}

const overrideOptions = {
    [BLOCKS.PARAGRAPH]: {
        component: Pr,
        props: {
            style: {marginBottom: '1rem', fontSize: '1.125rem', lineHeight: '1.75rem'}
        }
    },
    [BLOCKS.EMBEDDED_ASSET]: {
        image: {
            component: Im
        }
    },
    [INLINES.HYPERLINK]: {
        component: Radium(Hpl),
        /* props: {
            className: "hover:text-primary",
            style: { textDecorationLine: 'underline', overflowWrap: 'break-word' }
        } */
    },
    [BLOCKS.HEADING_2]: {
        component: Heading2,
        props: {
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
