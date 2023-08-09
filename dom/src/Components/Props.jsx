import React from 'react'

const Props = (props) => {
  return (
    <div>
          <div className='py-10 text-center flex flex-col gap-y-5'>
              <p className='bg-red-300'>Name is {props.data.name}</p>
                <p className='bg-red-300'> the Address is{props.data.address}</p>

            </div> 
    </div>
  )
}

export default Props