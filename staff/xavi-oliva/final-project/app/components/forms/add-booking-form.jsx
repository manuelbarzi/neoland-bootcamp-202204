import { Form, Input, Textarea, PrimaryButton } from '..'

export const AddBookingForm = ({ className, children, flat, ...props }) => {
    return <>
        <Form className={`px-1 ${className}`} {...props}>
            <Input className='border border-primary' type="text" name="name" placeholder="Name" />
            <Input className='border border-primary' type="text" name="phone" placeholder='Phone' />
            <Input className='border border-primary' type="text" name="email" placeholder="email" />
            <Textarea className='border border-primary mb-0' name="text" rows="3" placeholder='Add a note' />
            <Input className='border border-primary' type="text" name="from" placeholder="Initial date" />
            <Input className='border border-primary' type="text" name="to" placeholder="End date" />
            <PrimaryButton type="submit">Save Booking</PrimaryButton>
          </Form>
    </>
}

