export const Section = ({ className, children, ...props }) => {

	return <>
		<section {...props}
			className={`${className} 
                section`}>
			{children}
		</section>
	</>
}