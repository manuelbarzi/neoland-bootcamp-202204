import { deleteBooking } from 'logic'
import { DeleteButton } from '../../components'
import Router from 'next/router'

export const CardBookingList = ({ className, children, token, flat, bookings, ...props }) => {

    const handleRemoveClick = async bookingId => {

        try {
            await deleteBooking(token, flat._id, bookingId)
            // handleFeedback

            Router.reload(`/flats/${flat._id}/`)


        } catch (error) {
            console.error(error)
            // handleFeedback(error.message)
        }
    }

    return <>
        <div className='pb-4'>
            <div className='pb-2 flex flex-row content-between'>
                <h3 className='text-[13px] font-semibold text-primary w-1/2'>
                    Booking list:
                </h3>
                <h4 className='text-[11px] pt-1 text-secondary text-right w-1/2'>Showing {bookings.length} results</h4>
            </div>
            <ul className='text-xs text-gray-600 divide-y-2 border-y border-primary'>
                {bookings.length > 0 ? bookings.map((booking, i) => <li key={booking.id + i}
                    className='flex flex-row flex-wrap content-start box-border py-2'>
                    <h4 className="font-semibold py-2 basis-11/12">{booking.name}</h4>
                    <DeleteButton className='basis-1/12'
                        title='Delete Booking'
                        onClick={function (event) {
                            event.preventDefault()
                            handleRemoveClick(booking.id)
                        }}
                    />
                    <p className="p-2 mb-2 bg-gray-100 basis-full">{booking.text}</p>
                    <div className="basis-1/2">
                        <h4 className="py-1"><span className="font-semibold text-primary">t. </span> {booking.phone}</h4>
                        <h4 className="py-1"><span className="font-semibold text-primary">e. </span>{booking.email}</h4>
                    </div>
                    <div className="basis-1/2">
                        <h4 className="py-1"><span className="font-semibold text-primary">From: </span>{booking.from}</h4>
                        <h4><span className="font-semibold text-primary">To: </span>{booking.to}</h4>
                    </div>
                </li>) :
                    <li className="flex flex-row flex-wrap content-start box-border py-4">
                        <p>No bookings yet (click edit to add one)</p>
                    </li>
                }
            </ul>
        </div>
    </>
}