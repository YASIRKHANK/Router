import React from 'react';
import DetailProps from '../Components/DetailProps';
import pic from '../images/google.jpg';
const img = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

const Detail = () => {

const data={
    companyName: 'Atmosbit Software House',
    Description:" Description: Welcome to Atmosbit Software House, where innovation meets craftsmanship. With a passion for creating exceptional digital solutions, we strive to transform ideas into reality. Our team of dedicated experts is driven by the desire to deliver impactful and meaningful experiences to our clients and their users.",
    CompanyOverview:"Atmosbit Software House is a dynamic and forward-thinking technology company specializing in custom software development, web applications, mobile apps, and cutting-edge digital solutions. With a focus on quality, creativity, and collaboration, we are committed to pushing the boundaries of what's possible in the digital realm.",
    OurValues: " Innovation: We embrace the latest technologies and methodologies to bring innovation to every project. Excellence: Our pursuit of excellence drives us to deliver top-notch solutions that exceed expectations.Collaboration: We believe in working closely with our clients to understand their vision and create tailored solutions ",
    Services:"Custom Software Development: Crafting bespoke software solutions tailored to your business needs.Web and Mobile Apps: Building intuitive and engaging applications to enhance user experiences.UI/UX Design: Designing visually stunning interfaces that captivate and resonate with users.Digital Transformation: Guiding businesses through digital evolution, from strategy to implementation",
    ClientCentric:" Client-Centric Approach: At Atmosbit, our clients are at the heart of everything we do. We listen, collaborate, and prioritize their goals to ensure each project's success. Our dedication to understanding your needs enables us to deliver solutions that not only meet but exceed expectations.",
    JoinUs:"Whether you're a visionary entrepreneur or an established enterprise, we invite you to embark on a journey of digital transformation with us. Let's create remarkable solutions that make a lasting impact in the ever-evolving digital landscape.",
    ContactUs:"Ready to take the next step? Reach out to us at contact@atmosbit.com and let's start turning your ideas into reality."
  }
  return (
    <div style={img}>
      <DetailProps data={data}/>
    </div>
  );
};

export default Detail;
