import Hero from '../../Components/Hero'
import options from "../../contentOptions"
import './About.css'

export default function About() {
  const { about,services, skills, worktimeline } = options
  const { aboutme } = about
  return (
    <>
      <Hero/>
      <div className='about'>
        <div className='about-container'>
          <h2>About Me</h2>
          <hr className='hr-about'/>
          <div className='about-content'>
            <h3>A bit about myself</h3>
            <p>{aboutme}</p>
          </div>
          <div className='about-content'>
            <h3>Skills</h3>
            <div>
              {
                skills.map((skill, i) => ( 
                  <div key={i}>
                    <p>{skill.name}</p>
                    <p>{skill.value}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='about-content'>
            <h3>Work Timeline</h3>
            <div>
              {
                skills.map((skill, i) => ( 
                  <div key={i}>
                    <p>{skill.name}</p>
                    <p>{skill.value}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='about-content'>
            <h3>Services</h3>
            <div>
              {
                services.map((service, i) => ( 
                  <div key={i}>
                    <p>{service.title}</p>
                    <p>{service.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
