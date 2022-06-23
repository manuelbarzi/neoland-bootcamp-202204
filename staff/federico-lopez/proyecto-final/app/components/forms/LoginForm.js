import { SecondaryButton, Fieldset, Input, BlueAnchor, CheckboxInput, Label } from '../../components'
import Link from 'next/link'

export function LoginForm({ className, children, ...props }) {
    return (
        <form className={`w-full flex flex-col items-center gap-10 ${className}`} {...props}>
            <div className="w-full flex flex-col gap-4">
                <Fieldset className="w-full flex flex-col">
                    <Label className="font-medium" htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="example@example.com" required />
                </Fieldset>
                <Fieldset className="w-full flex flex-col">
                    <Label className="font-medium" htmlFor="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="*******" required />
                </Fieldset>
                <div className="w-full flex justify-between">
                    <Fieldset >
                        <CheckboxInput name="remember" id="remember" value="remember" />
                        <Label className="text-xs text-myblack" htmlFor="remember">Remember Me</Label>
                    </Fieldset>
                    <BlueAnchor>Forgot Password ?</BlueAnchor>
                </div>
            </div>
            <SecondaryButton type="submit">Log in</SecondaryButton>
            <div className="w-full gap-2 flex justify-center">
                <p class="text-myblack text-xs">Don't have an account ?</p>
                <Link href="/register">
                    <BlueAnchor>Sign Up</BlueAnchor>
                </Link>
            </div>
        </form>
    )
}