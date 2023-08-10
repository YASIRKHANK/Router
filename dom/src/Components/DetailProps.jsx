import React from 'react'

const Props = (props) => {
    return (
        <div>
            <div className='py-10 text-center flex flex-col gap-y-5'>
                <p className='font-extrabold  text-sky-400'> {props.data.companyName}</p>

                <div className='text-justify p-5 text-white ' >
                    <p className='font-extrabold text-sky-400 gap-y-1 text-left'>Description:</p>
                    {props.data.Description}
                </div>

                <div className='text-justify p-5 text-white'>
                    <p className='font-extrabold text-sky-400 gap-y-1 text-left'>Company Overview:</p>
                    <p className=''> {props.data.CompanyOverview}</p>
                </div>

                <div className='text-justify p-5 text-white'>
                    <p className='font-extrabold text-sky-400 gap-y-1 text-left'>Our Values:</p>
                    <ul className='list-disc ml-6'>
                        {props.data.OurValues.split('.').map((value, index) => (
                            <li key={index} className='mb-2'>
                                {value.trim()}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='text-justify p-5 text-white'>
                    <p className='font-extrabold text-sky-400 gap-y-1 text-left'>Services We Offer:</p>
                    <ul className='list-disc ml-6'>
                        {props.data.Services.split('.').map((value, index) => (
                            <li key={index} className='mb-2'>
                                {value.trim()}
                            </li>
                        ))}
                    </ul>
                </div>



                <div className='text-justify p-5 text-white'>
                    <p className='font-extrabold text-sky-400 gap-y-1 text-left'>Client-Centric Approach:</p>
                    <p className=''>{props.data.ClientCentric}</p>
                </div>

                <div className='text-justify p-5 text-white'>
                    <p className='font-extrabold text-sky-400 gap-y-1 text-left'> Join Us in Shaping the Future:</p>
                    <p className=''>  {props.data.JoinUs}</p>
                </div>

                <div className='text-justify p-5 text-white'>
                    <p className='font-extrabold text-sky-400 gap-y-1 text-left'> Contact Us:</p>
                    <p className=''>  {props.data.ContactUs}</p>
                </div>



            </div>
        </div>
    )
}

export default Props




//