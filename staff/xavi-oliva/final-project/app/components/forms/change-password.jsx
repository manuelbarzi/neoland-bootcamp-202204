import { Form, Input, PrimaryButton } from '../../components'

export const ChangePassword = ({ className, children, user, ...props }) => {
    return <>
        <Form className={`p-4 ${className}`} {...props}>
            <Input className="text-xs border border-primary p-3" type="password" name="oldPassword" placeholder="current password" />
            <Input className="text-xs border border-primary p-3" type="password" name="password" placeholder="new password" />
            <Input className="text-xs border border-primary p-3" type="password" name="repeatPassword" placeholder="repeat new password" />
            <PrimaryButton className="p-3">Save</PrimaryButton>
        </Form>
    </>
}

