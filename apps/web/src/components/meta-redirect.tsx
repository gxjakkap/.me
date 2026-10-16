export const MetaRedirect = ({ dest }: { dest: string }) => {
	return (
		<>
			<meta http-equiv="refresh" content={`0; url=${dest}`} />
			<p>redirecting...</p>
		</>
	)
}
