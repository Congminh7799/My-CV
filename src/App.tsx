import './App.css'
import TypeHonorsAward from './Types/HonorsAward.tsx'
import TypeSkill from './Types/Skill.tsx'
import TypeWorkExperience from './Types/WorkExperience.tsx'
import BorderLinear from './components/Blocks/BorderLinear.tsx'
import Education from './components/Education/index.tsx'
import HonorsAward from './components/HonorsAward/index.tsx'
import Information from './components/Information'
import My from './components/My/index.tsx'
import Objective from './components/Objective/index.tsx'
import Skill from './components/Skill/index.tsx'
import WorkExperience from './components/WorkExperience/index.tsx'

import myCv from './datas/my-cv.ts'

function App() {
  return (
    <div className='container mx-auto px-[18rem] py-[5rem] bg-lime-500 justify-center xl:flex contents'>
      <div className='layout-wrapper shadow-2xl pt-[1rem] pb-[3rem] bg-white rounded inline-block'>

        <section className='md:flex'>
          <div className='col-left basis-full md:basis-3/5'>
            <div className='px-[1rem] border-l-[5px] border-orange-500'>
              <My name={myCv.name} image={myCv.image} candidateRole={myCv.candidateRole} />
            </div>
          </div>
          <div className='col-right basis-full md:basis-2/5'>
            <div className='px-[1rem] md:border-r-[5px] md:border-l-0 border-l-[5px] border-orange-500'>
              <Information gender={myCv.gender} birthDay={myCv.birthDay} contact={myCv.contact} />
            </div>
          </div>
        </section>

        <section className='md:flex'>
          <div className='col-left basis-full md:basis-3/5'>
            <div className='px-[1rem] mt-10'>
              <BorderLinear title='OBJECTIVE' />
              <Objective objective={myCv.objective} />
            </div>
            <div className='px-[1rem] mt-10'>
              <BorderLinear title='EDUCATION' />
              {
                myCv.educations.map(function (item: { major: string, school: string, timeStart: string, timeEnd: string, gpa: string }, index: number) {
                  return <Education education={item} key={index} />
                })
              }
            </div>
            <div className='px-[1rem] mt-10'>
              <BorderLinear title='WORK EXPERIENCE' />
              {
                myCv.workExperience.map(function (item: TypeWorkExperience, index: number) {
                  return <WorkExperience workExperience={item} key={index} />
                })
              }
            </div>
          </div>
          <div className='col-right basis-full md:basis-2/5'>
            <div className='px-[1rem] mt-10'>
              <BorderLinear boldLength={50} title='SKILLS' />
              {
                myCv.skills.map(function (skill: TypeSkill, index: number) {
                  return <Skill skill={skill} key={index} hideBorder={index === myCv.skills.length - 1} />
                })
              }
            </div>
            <div className='px-[1rem] mt-10'>
              <BorderLinear boldLength={50} title='HONORS & AWARDS' />
              {
                myCv.honors_awards.map(function (honorsAward: TypeHonorsAward, index: number) {
                  return <HonorsAward honorsAward={honorsAward} key={index} />
                })
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
