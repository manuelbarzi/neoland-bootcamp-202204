import { SecondaryButton, Fieldset, Input, Label } from '../../components'

export function Slider({ className, children, ...props }) {
    return (
        <div className={`fixed bottom-20 w-11/12 h-auto bg-primary shadow-tertiary shadow-custom-footer flex overflow-x-scroll ${className}`} {...props}>
            {children}
        </div>
    )
}