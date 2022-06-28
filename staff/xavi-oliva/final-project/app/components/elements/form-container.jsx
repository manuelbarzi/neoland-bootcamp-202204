export const FormContainer = ({ className, children, ...props }) => {

	return <>
		<div {...props}
			className={`${className}
            border-b-2 border-gray-20`}>
			{children}
		</div>
	</>
}