
import React from 'react';
import pic from '../images/jaredd.jpg';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import Props from '../Components/Props';


const img = {
  backgroundImage: `url(${pic})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
};

const data={
  name:"zahid",
  address:"Buner"
}

const Home = () => {
  return (
    <div>
      <div style={img} className='p-4'>
        <h1 className='flex p-5 font-extrabold text-white'> Home Page</h1>
        <p className='text-justify text-pink-500'>
        Paragraphs are medium-sized units of writing, longer than sentences, but
        shorter than sections, chapters, or entire works. Because they connect
        the “small” ideas of individual sentences to a “bigger” idea, paragraph
        structure is essential to any writing for organization, flow, and
        comprehension. Students have a lot of questions when it comes to writing
        a paragraph: How many sentences should you use? How do you transition
        within a paragraph? When do you end a paragraph? Etc. Below we explain
        everything you need to know about paragraph structure to write like an
        expert, including several paragraph examples.
        Paragraphs are medium-sized units of writing, longer than sentences, but
        shorter than sections, chapters, or entire works. Because they connect
        the “small” ideas of individual sentences to a “bigger” idea, paragraph
        structure is essential to any writing for organization, flow, and
        comprehension. Students have a lot of questions when it comes to writing
        a paragraph: How many sentences should you use? How do you transition
        within a paragraph? When do you end a paragraph? Etc. Below we explain
        everything you need to know about paragraph structure to write like an
        expert, including several paragraph examples.
        Paragraphs are medium-sized units of writing, longer than sentences, but
        shorter than sections, chapters, or entire works. Because they connect
        the “small” ideas of individual sentences to a “bigger” idea, paragraph
        structure is essential to any writing for organization, flow, and
        comprehension. Students have a lot of questions when it comes to writing
        a paragraph: How many sentences should you use? How do you transition
        within a paragraph? When do you end a paragraph? Etc. Below we explain
        everything you need to know about paragraph structure to write like an
        expert, including several paragraph examples.
        Paragraphs are medium-sized units of writing, longer than sentences, but
        shorter than sections, chapters, or entire works. Because they connect
        the “small” ideas of individual sentences to a “bigger” idea, paragraph
        structure is essential to any writing for organization, flow, and
        comprehension. Students have a lot of questions when it comes to writing
        a paragraph: How many sentences should you use? How do you transition
        within a paragraph? When do you end a paragraph? Etc. Below we explain
        everything you need to know about paragraph structure to write like an
        expert, including several paragraph examples.
        </p>
      </div>

      <div className='flex'>

        <div className='w-1/2  px-12 py-2'>
          <p className='font-extrabold'>Welcome to IQRA University Islamabad Campus</p>
          <p className=' text-justify'>
            Iqra University traces its genesis to January 1998 when it started its operations in Karachi. The
            Government of Sindh chartered the University; vide Sindh Ordinance VI of 2000. Currently, Iqra University has
            campuses in all Provincial Capitals of Pakistan and the Federal Capital, Islamabad. The Islamabad Campus
            received recognition by the Higher Education Commission (HEC), (the then UGC), in March 2001 under document
            reference No.16-23/ugc/secy/99/60. Recently, HEC has awarded category W’, i.e., A’ to Islamabad Campus
            because of its highly sophisticated infrastructure and state-of-the-art academic/research facilities.
          </p>
        </div>

<div className='flex-col'>
        <div className='px-12 p-5'>
          <div className='font-extrabold p-4'>Vision of Iqra University</div>
          <div>
            To transform the lives of youth through world-class education at an affordable price.
          </div>
        </div>

        <div className='px-12 p-5'>
          <div className='font-extrabold p-4'>Mission of Iqra University</div>
          <div>
            To be a world-class institution of higher education and research, promoting technical skills, critical
            thinking, and public duty, to help develop a prosperous and progressive society.
          </div>
        </div>

        
        <div className='px-12 p-5'>
          <div className='font-extrabold p-4'>Mission of Iqra University</div>
          <div>
            To be a world-class institution of higher education and research, promoting technical skills, critical
            thinking, and public duty, to help develop a prosperous and progressive society.
          </div>
        </div>
        </div>
      </div>

      <Props data={data}/>



   <footer className='flex justify-center bg-blue-500 items-center gap-x-2 text-white'> <AiOutlineCopyrightCircle/>copyRight</footer>
   

    
    </div>
  );
};

export default Home;


