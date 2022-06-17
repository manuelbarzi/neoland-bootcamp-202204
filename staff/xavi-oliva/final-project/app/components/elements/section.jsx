export const Section = ({ className, children, ...props }) => {

    return <>
        <section {...props}
            className={`${className} relative
            flex-1 overflow-y-auto`}>
            {children}
            <div id='bg-layout' className='fixed top-16 bg-gradient-primary
            -z-50 w-full h-full max-h-[calc(100vh-64px-64px)]'>
          {/* <div className='bg-gradient-primary'></div> */}
            </div>
        </section>
    </>
}