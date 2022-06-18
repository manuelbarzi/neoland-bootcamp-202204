import { SecondaryButton, Fieldset, Input, Label } from '../../components'

export function LoginForm({ className, children, ...props }) {
    return (
        <form className={`w-full flex flex-col items-center gap-10 ${className}`} {...props}>
            <Fieldset>
                <Label htmlFor="email">Enter your email</Label>
                <Input className="bg-primary" type="email" name="email" id="email" placeholder="example@example.com" required />
            </Fieldset>
            <Fieldset>
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="*******" required />
            </Fieldset>
            <SecondaryButton type="submit">Log in</SecondaryButton>
        </form>
    )
}