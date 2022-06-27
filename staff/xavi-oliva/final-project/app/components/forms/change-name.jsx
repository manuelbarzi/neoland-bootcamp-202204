import { Form, Input, PrimaryButton } from '../../components'

export const ChangeName = ({ className, children, user, ...props }) => {
    return <>
        <Form className={`p-4 ${className}`} {...props}>
            <Input className="text-xs border border-primary p-3" defaultValue={user.name} type="text" name="name" placeholder="name" required />
            <Input className="text-xs border border-primary p-3" defaultValue={user.surnames} type="text" name="surnames" placeholder="surnames" />
            <Input className="text-xs border border-primary p-3" defaultValue={user.phone} type="text" name="phone" placeholder="phone" />
            <PrimaryButton className="p-3">Save</PrimaryButton>
        </Form>
    </>
}