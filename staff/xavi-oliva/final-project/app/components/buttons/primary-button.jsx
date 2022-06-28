export const PrimaryButton = ({ className, children, ...props }) => {

  return <>
    <button {...props}
      className={`${className} 
                primary-button`}>
      {children}
    </button>
  </>
}