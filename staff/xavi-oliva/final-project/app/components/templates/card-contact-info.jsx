export const CardContactInfo = ({ className, children, flat, ...props }) => {

    return <>
        <div className='card-group flex flex-row content-start gap-4 pb-4'>
            <div className='left basis-1/2'>
                <h3 className='text-[13px] font-semibold text-primary'>
                    Contact Phone
                </h3>
                <h3 className='text-[13px] text-gray-600'>
                    687 966 017
                </h3>
            </div>
            <div className='right basis-1/2'>
                <h3 className='text-[13px] font-semibold text-primary'>
                    Contact Email
                </h3>
                <h3 className='text-[13px] text-gray-600'>
                    brun@flats.com
                </h3>
            </div>
        </div>
    </>
}