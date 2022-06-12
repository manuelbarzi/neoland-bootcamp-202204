export const Section = ({ className, children, ...props }) => {

	return <>
		<section {...props}
			className={`${className} 
                flex flex-col gap-5 h-screen w-screen
                justify-center items-center`}>
			{children}
		</section>
	</>
}