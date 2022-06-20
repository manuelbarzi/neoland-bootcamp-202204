export const Form = ({ className, children, ...props }) => {

	return <>
		<form {...props}
			className={`${className}`}>
			{children}
		</form>
	</>
}