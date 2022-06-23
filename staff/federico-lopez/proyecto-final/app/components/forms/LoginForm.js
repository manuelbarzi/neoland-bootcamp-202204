import { SecondaryButton, Fieldset, Input, BlueAnchor, CheckboxInput, Label } from '../../components'

export function LoginForm({ className, children, ...props }) {
    return (
        <form className={`w-5/6 flex flex-col items-center gap-10 ${className}`} {...props}>
            <Fieldset className="flex-col">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="example@example.com" required />
            </Fieldset>
            <Fieldset className="flex-col">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="*******" required />
            </Fieldset>
            <div className="w-full flex justify-between">
                <Fieldset >
                    <CheckboxInput type="checkbox" name="remember" id="remember" value="remember" />
                    <Label className="text-xs text-myblack" htmlFor="remember">Remember Me</Label>
                </Fieldset>
                <BlueAnchor className="w-2/3">Forgot Password ?</BlueAnchor>
            </div>
            <SecondaryButton type="submit">Log in</SecondaryButton>
        </form>
    )
}