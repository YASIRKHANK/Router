
import React, { useState } from 'react'
import women from '../Images/meeting.jpg'
import background from '../images/Milad.jpg'; // Import the background image

const backgroundStyle = {
  background: `url(${background})`, // Use the imported image here
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
};
const About = () => {

  const [show, setShow] = useState(true)

  const handleImage = () => {
    setShow(!show)
  }


  const handleImg = () => {
    setShow(false)
  }

  return (
    <div style={backgroundStyle} className='flex gap-x-6 mt-6'>

      <div className='w-1/2 px-12 py-2 '>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47]  '>AtmosBit Software House</h1>
        <p className=' tracking-widest font-[arial] text-justify p-2 bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47]  font-extrabold'> Atmosbit Software House is a cutting-edge and innovative technology company that specializes in delivering high-quality software solutions to meet the diverse needs of businesses and organizations. With a team of skilled and passionate developers, designers, and engineers, Atmosbit takes pride in crafting tailor-made software applications that empower clients to thrive in today's digital landscape.

          With a customer-centric approach, Atmosbit aims to exceed expectations by understanding the unique requirements of each project and delivering solutions that are both efficient and user-friendly. The company's commitment to excellence, combined with a strong focus on creativity and problem-solving, ensures that clients receive top-notch software products that drive growth and efficiency.

          Atmosbit's portfolio encompasses a wide range of services, including web and mobile application development, custom software solutions, cloud-based systems, and digital transformation strategies. Their dedication to staying at the forefront of technology trends allows them to deliver solutions that are not only innovative but also scalable and future-proof.:</p>
        <button onClick={handleImage} type='button' className='border  bg-blue-950 text-white rounded-lg px-4 py-1'>Show</button>
        <div>
          {
            show && (
              <img src={women} onClick={handleImg} className='rounded-2xl w-62 h-52 ' />
            )
          }
        </div>
      </div>
      <div className='w-1/2 px-12 py-4  '>
        <img src={women} alt='women' className='rounded-2xl  h-80 w-92' />
        <p className='font-extrabold p-3 bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] '>Vision of Atmosbit Software House:</p>
        <p className='text-justify font-extrabold text-white'>Atmosbit's vision is to be a leading global provider of innovative software solutions that transform businesses and drive digital excellence. We envision a future where our cutting-edge technologies empower organizations to reach their full potential, enhance efficiency, and create meaningful impacts in their respective industries. By continuously pushing the boundaries of software development and adopting emerging technologies, we aspire to be the go-to partner for businesses seeking transformative solutions that drive growth and success.</p>

        <p className='font-extrabold p-3 bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] '>Mission of Atmosbit Software House:</p>
        <p className='text-justify font-extrabold text-white'>Atmosbit's mission is to deliver top-notch software products and services that cater to the unique needs of our clients. We are committed to understanding their challenges, goals, and aspirations to craft tailor-made solutions that add value to their operations. Through collaboration, creativity, and a customer-centric approach, we strive to build long-lasting partnerships with our clients, providing them with scalable, secure, and user-friendly software applications. Our mission is to empower businesses with the right technological tools, enabling them to stay ahead in a dynamic and ever-evolving digital landscape.</p>
      </div>

    </div>
  )
}

export default About



