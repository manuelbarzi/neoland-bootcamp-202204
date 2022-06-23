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
                    className='flex flex-col content-around w-full h-full py-3'>
                    <h4><span className="font-semibold">{booking.name} -</span> {booking.text}</h4>
                    <h4 className="indent-1"><span className="font-semibold">t.</span> {booking.phone} |
                        <span className="font-semibold"> e. </span>{booking.email}</h4>
                    <h4 className="indent-1"><span className="font-semibold">From: </span>{booking.from}
                        <span className="font-semibold"> To: </span>{booking.to}</h4>
                </li>)}
            </ul>
        </div>
    </>
}