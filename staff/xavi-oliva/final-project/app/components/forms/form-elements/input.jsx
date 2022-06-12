export const Input = ({ className, children, ...props }) => {

    return <>
        <input {...props}
            className={`${className}
            placeholder-primary appearance-none border-0 rounded-lg w-full
            mb-2 py-4 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline`}>
            {children}
        </input> 
        </>
  }