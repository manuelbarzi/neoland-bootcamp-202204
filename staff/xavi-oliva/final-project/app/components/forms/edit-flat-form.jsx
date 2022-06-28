import { Form, Input, Textarea, PrimaryButton } from '../../components'

export const EditFlatForm = ({ className, children, flat, ...props }) => {
    return <>
        <Form className={`px-1 ${className}`} {...props}>
            <Input className='border border-primary' type="text" name="title" placeholder="Title" defaultValue={flat.title}></Input>
            <Textarea className='border border-primary mb-0' defaultValue={flat.description} name="description" rows="5" placeholder='Description' />
            <Input className='border border-primary' type="text" defaultValue={flat.address} name="address" placeholder="address"></Input>
            <PrimaryButton type="submit">Save Flat</PrimaryButton>
        </Form>
    </>
}

