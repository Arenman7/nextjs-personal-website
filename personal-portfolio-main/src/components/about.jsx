import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, at minima! Ad, soluta alias quibusdam molestiae laboriosam amet excepturi vitae repellendus officia, nemo quidem non blanditiis accusantium aliquam, in magni.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ratione sequi vitae velit soluta! Beatae rerum at nobis ex sequi aliquid ipsa quos expedita praesentium! Sunt dolor soluta veritatis eos.</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;