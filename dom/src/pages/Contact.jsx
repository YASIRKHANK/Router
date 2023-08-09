import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {


  const variable=useNavigate();
  const toQari=(props)=>{
    variable('/qari')
  }

  return (
    <div className="container mx-auto p-4  bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] ">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-8">We'd love to hear from you! Please fill out the form below or use the contact information to get in touch.</p>

      <div className="flex justify-center ">
        <form className="w-1/2">
          <div className="mb-4">
            <label type="name" className="block text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded outline-none" required />
          </div>

          <div className="mb-4">
            <label type="name" className="block text-sm font-bold mb-2">Father-Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded outline-none" required />
          </div>

          <div className="mb-4">
            <label type="email" className="block text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded outline-none" required />
          </div>

          <div className="mb-4">
            <label type="message" className="block text-sm font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded outline-none" required></textarea>
          </div>

          <button onClick={toQari} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>

      <div className="mt-8 px-80">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> info@atmosbit.com</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>

      {/* <div className='py-10 text-center flex flex-col gap-y-5'>
              <p className='bg-red-300'>Name is {props.data.name}</p>
                <p className='bg-red-300'> the Address is{props.data.address}</p>

            </div>  */}
    </div>
  );
};

export default Contact;
