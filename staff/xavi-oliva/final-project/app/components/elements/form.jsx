export const Form = ({ className, children, ...props }) => {

	return <>
		<form {...props}
			className={`${className} 
				px-8`}>
			{children}
		</form>
	</>
}