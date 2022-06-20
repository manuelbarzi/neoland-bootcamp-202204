import { SecondaryButton, Fieldset, Input, Label } from '../../components'

export function RegisterForm({ className, children, ...props }) {
    return (
        <form className={`w-full flex flex-col items-center gap-5 ${className}`} {...props}>
            <Fieldset>
                <Label htmlFor="email">Enter your email</Label>
                <Input type="email" name="email" id="email" placeholder="example@example.com" required />
            </Fieldset>
            <Fieldset>
                <Label htmlFor="username">Enter your email</Label>
                <Input type="text" name="username" id="username" placeholder="uesrname" required />
            </Fieldset>
            <Fieldset>
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="*******" required />
            </Fieldset>
            <Fieldset>
                <Label htmlFor="repeatPassword">Password</Label>
                <Input type="password" name="repeatPassword" id="repeatPassword" placeholder="*******" required />
            </Fieldset>
            <SecondaryButton type="submit">Register</SecondaryButton>
        </form>
    )
}