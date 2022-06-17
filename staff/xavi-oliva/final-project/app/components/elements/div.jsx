export const Div = ({ className, children, ...props }) => {

	return <>
		<div {...props}
			className={`${className} 
                section`}>
			{children}
		</div>
	</>
}