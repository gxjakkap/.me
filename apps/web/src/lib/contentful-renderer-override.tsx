import type { Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS, type Block, INLINES, type Inline } from "@contentful/rich-text-types"

function getHeadingHash(node: Block | Inline) {
	const text = node.content.map((c) => (c.nodeType === "text" ? c.value : "")).join("")
	return encodeURIComponent(text.toLowerCase().replaceAll(" ", "-"))
}

export const renderOptions: Options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (_, children) => (
			<p style={{ marginBottom: "1rem", fontSize: "1rem", lineHeight: "1.5rem" }}>{children}</p>
		),
		[BLOCKS.HEADING_2]: (node, children) => {
			const hash = getHeadingHash(node)
			return (
				<h2
					id={hash}
					style={{
						marginBottom: "0.75rem",
						marginTop: "2.5rem",
						fontSize: "1.75rem",
						lineHeight: "2.5rem",
						fontWeight: 700,
					}}>
					<a className="hover:underline" href={`#${hash}`}>
						{children}
					</a>
				</h2>
			)
		},
		[BLOCKS.HEADING_3]: (node, children) => {
			const hash = getHeadingHash(node)
			return (
				<h3
					id={hash}
					style={{
						marginBottom: "0.75rem",
						marginTop: "2.5rem",
						fontSize: "1.5rem",
						lineHeight: "2.25rem",
						fontWeight: 600,
					}}>
					<a className="hover:underline" href={`#${hash}`}>
						{children}
					</a>
				</h3>
			)
		},
		[INLINES.HYPERLINK]: (node, children) => (
			<a
				style={{ color: "rgb(59 130 246)", overflowWrap: "break-word" }}
				href={node.data.uri}
				target="_blank"
				rel="noopener noreferrer">
				{children}
			</a>
		),
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const { file, title } = node.data.target.fields
			if (!file?.contentType?.startsWith("image/")) return null
			return (
				<img
					loading="lazy"
					style={{
						marginTop: "1.25rem",
						marginBottom: "1.25rem",
						maxWidth: "50vw",
						maxHeight: "550px",
						marginLeft: "auto",
						marginRight: "auto",
					}}
					src={`https:${file.url}`}
					alt={title}
				/>
			)
		},
	},
}
