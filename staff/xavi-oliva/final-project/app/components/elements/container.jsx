export const Container = ({ className, children, ...props }) => {

	return <>
		<section {...props}
			className={`${className} 
                flex flex-wrap justify-between h-fit p-1`}>
			{children}
		</section>
	</>
}