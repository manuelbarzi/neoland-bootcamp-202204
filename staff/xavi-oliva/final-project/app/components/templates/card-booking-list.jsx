export const CardBookingList = ({ className, children, flat, ...props }) => {

    return <>
        <div className='pb-4'>
            <div className='pb-2'>
                <h3 className='text-[13px] font-semibold text-primary'>
                    Booking list:
                </h3>
            </div>
            <ul className='text-xs text-gray-600 divide-y-2 border-y border-primary'>
                {flat.bookings.map((booking, i) => <li key={booking._id + i}
                    className='flex flex-row flex-wrap content-start box-border py-2'>
                    <div className="basis-full mb-2">
                        <h4 className="font-semibold py-1">{booking.name}</h4>
                        <p className="p-1 bg-gray-100">{booking.text}</p>
                    </div>
                    <div className="basis-1/2">
                        <h4 className="py-1"><span className="font-semibold text-primary">t. </span> {booking.phone}</h4>
                        <h4 className="py-1"><span className="font-semibold text-primary">e. </span>{booking.email}</h4>
                    </div>
                    <div className="basis-1/2">
                        <h4 className="py-1"><span className="font-semibold text-primary">From: </span>{booking.from}</h4>
                        <h4><span className="font-semibold text-primary">To: </span>{booking.to}</h4>
                    </div>
                </li>)}
            </ul>
        </div>
    </>
}