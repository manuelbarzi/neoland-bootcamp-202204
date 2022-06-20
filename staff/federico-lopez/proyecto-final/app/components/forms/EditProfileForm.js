import { SecondaryButton, Fieldset, Input, Label } from '../../components'

export function EditProfileForm({ className, children, user, ...props }) {
    debugger
    return (
        <form className={`w-full flex flex-col items-center gap-5 ${className}`} {...props}>
            <Fieldset>
                <Label htmlFor="firstName">First name</Label>
                <Input type="text" name="firstName" id="firstName" defaultValue={user.firstName || ""} required />
            </Fieldset>
            <Fieldset>
                <Label htmlFor="lastName">Last name</Label>
                <Input type="text" name="lastName" id="lastName" defaultValue={user.lastName || ""} required />
            </Fieldset>
            <Fieldset>
                <Label htmlFor="dateOfBirth">Date of birth</Label>
                <Input type="date" name="dateOfBirth" id="dateOfBirth" defaultValue={user.dateOfBirth && user.dateOfBirth.slice(0, 10) || ""} required />
            </Fieldset>
            <SecondaryButton type="submit">SAVE</SecondaryButton>
        </form>
    )
}