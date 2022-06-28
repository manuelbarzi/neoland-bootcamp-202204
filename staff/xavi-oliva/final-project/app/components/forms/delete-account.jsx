import { Form, Input, PrimaryButton } from "../../components"


export const DeleteAccount = ({ className, children, user, ...props }) => {
    return <>
        <Form className={`p-4 ${className}`} {...props}>
            <Input className="text-xs border border-primary p-3" type="password" name="password" placeholder="password" />
            <Input className="text-xs border border-primary p-3" type="password" name="repeatPassword" placeholder="repeat password" />
            <PrimaryButton className="p-3">Delete</PrimaryButton>
        </Form>
    </>
}