
import React, { useState } from "react";
import './About.css';
import iconDev from '../assets/About/icon-dev.svg';
import LanguageBar from "./LanguageBar";
import htmlImg from "../assets/About/html.png";
import cssImg from "../assets/About/css.png";
import jsImg from "../assets/About/java-script.png";
import reactImg from "../assets/About/react.png";
import githubImg from "../assets/About/git.png";
import npmImg from "../assets/About/npm.png";
import figmaImg from "../assets/About/figma.png";

const About = () => {

  const [showContent, setShowFullContent] = useState(false);

  const primaryFocus = [
    {
      imgUrl: iconDev,
      heading: 'Web Design & Development',
      content: 'Creating attractive, easy-to-use websites that work well for businesses and individuals online.'
    },
    {
      imgUrl: iconDev,
      heading: 'Web Design & Development',
      content: 'Creating attractive, easy-to-use websites that work well for businesses and individuals online.'
    },
    {
      imgUrl: iconDev,
      heading: 'Web Design & Development',
      content: 'Creating attractive, easy-to-use websites that work well for businesses and individuals online.'
    },
    {
      imgUrl: iconDev,
      heading: 'Web Design & Development',
      content: 'Creating attractive, easy-to-use websites that work well for businesses and individuals online.'
    }
  ]

  const aboutMeContent = `Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
  Full-Stack software developer, I specialize in creating visually
  appealing websites, apps and mobile games. My passion for graphic design
  isn't just a hobby, it's a key ingredient in every project I work on.
  Growing up bilingual, I developed a love for languages and I currently
  speak four of them fluently. I believe that this skill has given me a
  unique perspective and allows me to communicate effectively with clients
  from all over the world. One of my strengths is adding a personal touch
  to my projects by adding the client's identity and message into the
  design, creating meaningful and beautiful end products that are both
  eye-catching and user-friendly. In my free time, I enjoy exploring my
  other passions, such as photography and music production, which provide
  me with creative outlets. I am also very passionate about Web3 and
  everything related to crypto, NFTs and blockchain technology as I
  believe they have the potential to revolutionize business and online
  interactions. If you have an innovative idea for a project that needs to
  be developed, I would love to hear from you. Your vision can be turned
  into a real product. Don't hesitate to reach out and let's start a
  conversation about your concept. I'm excited to collaborate and help
  bring your ideas to life.`

  return (
    <div className="about px-6 py-8">

      <h2 className="about-me text-left text-3xl text-white font-bold">About Me</h2>
      <article className="text-left text-gray-300 flex flex-col relative border border-solid border-black rounded-2xl p-6">
        {
          showContent ? aboutMeContent : aboutMeContent.slice(0,300) + "..."
        }
        <br/><br/><br/>
        <button className="show-more-btn border-none" onClick={()=>setShowFullContent(!showContent)}>⬇ Show more ⬇</button>
      </article>

      <h3>Primary Focus</h3>
      <div className="primary-focus grid grid-cols-2">
        {
        primaryFocus.map((obj)=> {
          return (
            <div className="primary-focus-card">
              <figure className="w-16"><img alt="img" src={obj.imgUrl} className="w-full" /></figure>
              <div className="primary-focus-card-details">
                <h3>{obj.heading}</h3>
                <p>{obj.content}</p>
              </div>
            </div>
          )
        })
      }
      </div>

      <h3>Exploring Creativity</h3>
      <div className="exploring-creativity grid grid-cols-2">

        <div className="exploring-creativity-card">
          <figure className="w-16"><img alt="img" src={iconDev} className="w-full" /></figure>
          <div className="exploring-creativity-card-details">
            <h3>Visual Storytelling</h3>
            <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
          </div>
        </div>
        <div className="exploring-creativity-card">
          <figure className="w-16"><img alt="img" src={iconDev} className="w-full" /></figure>
          <div className="exploring-creativity-card-details">
            <h3>Visual Storytelling</h3>
            <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
          </div>
        </div>

      </div>

      <h3>Languages</h3>
      <div className="languages flex">

        <div className="coding-languages w-1/2">
          <h3>Coding Languages</h3>
          <LanguageBar/>
          <LanguageBar/>
          <LanguageBar/>
        </div>

        <div className="human-languages w-1/2">
          <h3>Human Languages</h3>
          <LanguageBar/>
          <LanguageBar/>
          <LanguageBar/>
        </div>

      </div>

      <h3>Development Skills</h3>
      <div className="development-skills-container">
        <div className="development-skills-slider flex items-center">
          <figure className="w-36"><img alt="" className="w-full" src={htmlImg}/></figure>
          <figure className="w-36"><img alt="" className="w-full" src={cssImg}/></figure>
          <figure className="w-36"><img alt="" className="w-full" src={jsImg}/></figure>
          <figure className="w-36"><img alt="" className="w-full" src={reactImg}/></figure>
          <figure className="w-36"><img alt="" className="w-full" src={githubImg}/></figure>
          <figure className="w-36"><img alt="" className="w-full" src={npmImg}/></figure>
          {/* <figure className="w-36"><img alt="" className="w-full" src={figmaImg}/></figure> */}
        </div>
      </div>
      
    </div>
  );
};

export default About;
