export const Div = ({ className, children, ...props }) => {

	return <>
		<div {...props}
			className={`${className}`}>
			{children}
		</div>
	</>
}