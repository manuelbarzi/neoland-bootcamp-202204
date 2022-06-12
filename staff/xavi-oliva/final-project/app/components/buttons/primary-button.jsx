export const PrimaryButton = ({ className, children, ...props }) => {

  return <>
    <button {...props}
      className={`${className} 
                appearance-none border-0 rounded-lg w-full py-4 px-3 text-white
                font-semibold bg-primary leading-tight`}>
      {children}
    </button>
  </>
}