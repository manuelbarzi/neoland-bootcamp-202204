export const Card = ({ className, children, ...props }) => {

	return <>
		<article {...props}
			className={`${className} 
                grow-0 shrink w-full min-h-fit box-border bg-white rounded-lg p-2`}>
			{children}
		</article>
	</>
}