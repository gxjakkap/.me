export const MetaRedirect = ({ dest }: { dest: string }) => {
	return (
		<>
			<meta httpEquiv="refresh" content={`0; url=${dest}`} />
			<p>redirecting...</p>
		</>
	)
}
