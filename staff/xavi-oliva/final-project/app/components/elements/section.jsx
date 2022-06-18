export const Section = ({ className, children, ...props }) => {

    return <>
        <section {...props}
            className={`${className} 
             bg-gradient-primary`}>
            {children}
            {/*<div id='bg-layout' className='flex flex-col bg-gradient-primary
            -z-50 w-full h-full'>  </div>*/}
            {/* <div className='bg-gradient-primary'></div>*/}

        </section>
    </>
}