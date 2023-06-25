import React from 'react'
import "./cv.css"
import {
  Header, Heading, CVWrapper, UList,
  Name, Role,
  Contact, ContactLink,
  Content, ContentLeft, ContentRight,
  Education, Major, School, Year,
  Languages, LanguageItem, Proficiency,
  Skills, Experience,
  Company, CompanyLoc, WorkDetail
} from './custom-tw-components'

const CV: React.FC = () => {
  return (
    <CVWrapper>
      <Header>
        <div>
          <Name>Jii Eu</Name>
          <Role>Front-End Engineer</Role>
        </div>
        <Contact>
          <ContactLink>
            <a href="https://www.jiieu.com">jiieu.com</a>
          </ContactLink>
          <ContactLink className='mb-2'>
            <a href="https://www.rolemadelen.com">www.github.com/rolemadelen</a>
          </ContactLink>
          <div>
            <a href="mailto:eu.jii@protonmail.com">eu.jii@protonmail.com</a>
          </div>
          <div>+1 606.389.2964</div>
        </Contact>
      </Header>
      <Content className='main-content'>
        <ContentLeft>
          <Education>
            <Heading>Education</Heading>
            <UList>
              <School>University of California San Diego</School>
              <Major>B.S. Human Computer Interaction</Major>
              <Year>Graduated 2019</Year>
            </UList>

            <UList>
              <School>Riverside City College</School>
              <Major>A.S. Computer Science</Major>
              <Year>Graduated 2016</Year>
            </UList>

            <UList>
              <School>Santiago High School</School>
              <Year>Graduated 2013</Year>
            </UList>
          </Education>

          <Languages>
            <Heading>Languages</Heading>
            <UList>
              <LanguageItem>
                Korean <Proficiency>(Native)</Proficiency>
              </LanguageItem>
              <LanguageItem>
                English <Proficiency>(Proficient)</Proficiency>
              </LanguageItem>
              <LanguageItem>
                Japanese <Proficiency>(Conversational)</Proficiency>
              </LanguageItem>
            </UList>
          </Languages>

          <Skills>
            <Heading className='skills'>Hard Skills</Heading>
            <h3 className='underline'>Advanced</h3>
            <UList className='predominant'>
              <li>HTML / SCSS / TailwindCSS / </li>
              <li>JavaScript / TypeScript / </li>
              <li>React / Responsive UI / </li>
              <li>Styled Components / Git / </li>
              <li>C / C++</li>
            </UList>
            <h3 className='underline'>Intermediate</h3>
            <UList className='predominant'>
              <li>Next.js / Vue / Node / Express / </li>
              <li>AWS Lightsail / REST API / </li>
              <li>Linux / Cron Jobs / </li>
              <li>MySQL / MongoDB</li>
            </UList>
            <h3 className='underline'>Have Done Projects</h3>
            <UList className='predominant'>
              <li>Java / C# / Python</li>
              <li>Ruby / Rails / PHP /</li>
              <li>jQuery</li>
            </UList>
          </Skills>
          <Skills>
            <Heading className='skills'>Soft Skills</Heading>
            <UList className='predominant'>
              <div className='max-w-[15rem] mb-2'>
                My experiences in both the education and technical fields have shaped me into a well-rounded individual. Through teaching, I have developed strong communication, patience, and organizational skills, enabling me to effectively connect with others and manage tasks efficiently.
              </div>
              <div className='max-w-[15rem] mb-2'>
                Additionally, my hands-on experience as a software engineer has expanded my logical thinking and problem-solving abilities, allowing me to approach challenges with a strategic mindset.
              </div>
              <div className='max-w-[15rem]'>
                These combined experiences have provided me with a diverse skill set that I bring to every endeavor, fostering collaboration and adaptability in various settings.
              </div>
            </UList>
          </Skills>

        </ContentLeft>

        <ContentRight>
          <Experience className='experience'>
            <Heading>Relevant Experience</Heading>
            <UList>
              <Company>Aikomi Inc.  | Frontend Engineer</Company>
              <CompanyLoc>Minatomirai, Japan | Apr 2021 - Feb 2023</CompanyLoc>
              <WorkDetail>
                - Built and deployed a brand new website called Aikomi Care, a webiste designed to introduce users to Aikomi Care.
              </WorkDetail>
              <WorkDetail>
                - Contributed in maintaining and updating the UI, ensuring its consistent functionality, usability, and visual appeal through regular monitoring and proactive updates.
              </WorkDetail>
              <WorkDetail>
                - Initiated and played a key role in creating the coding guidelines for the team, promoting consistency and best practices in software development.
              </WorkDetail>
              <WorkDetail>
                - Volunteered to provide interpretation support in English and Japanese languages for team members.
              </WorkDetail>
              <WorkDetail>
                - Successfully advocated for the adoption of Notion as the primary resource for onboarding, error reports, document management, planning, and internal wiki purposes, resulting in enhanced efficiency and collaboration within the team.
              </WorkDetail>
            </UList>
            <UList>
              <Company>FASTech LLC.  | Frontend Engineer Intern</Company>
              <CompanyLoc>La Jolla, CA | Winter 2017 </CompanyLoc>
              <WorkDetail>
                - Utilized HTML/CSS, JavaScript, and PHP to develop a subpage that
                effectively introduced the company's product, utilizing a given template.
              </WorkDetail>
            </UList>
            <UList>
              <Company>Riverside City College  | Computer Lab Aide</Company>
              <CompanyLoc>Riverside, CA | Sept 2014 – Apr 2016</CompanyLoc>
              <WorkDetail>
                - Provided programming support in C++ and Java, assisting students with assignments and projects.
              </WorkDetail>
              <WorkDetail>
                - Tutored students in CS and CIS Software enhancing their proficiency in essential tools.
              </WorkDetail>
            </UList>
          </Experience>

          <Experience className='experience'>
            <Heading>Other Experience</Heading>
            <UList>
              <Company>BorderLink, Inc. | Foreign Language Teacher </Company>
              <CompanyLoc>Saitama, Japan | Apr 2020 - Mar 2021</CompanyLoc>
              <WorkDetail>
                - Taught English to diverse groups of students, ranging from third to sixth grade, at four different elementary schools in Japan.
              </WorkDetail>
              <WorkDetail>
                - Developed and implemented engaging lesson plans to facilitate language acquisition, focusing on listening, speaking, reading, and writing skills.
              </WorkDetail>
              <WorkDetail>

                - Adapted instructional materials and teaching strategies to meet the needs and learning styles of individual students.
              </WorkDetail>
              <WorkDetail>
                - Collaborated with fellow teachers and school staff to coordinate educational activities and promote a supportive learning environment.
              </WorkDetail>
            </UList>
            <UList>
              <Company>Riverside City College  | Track & Field Team Manager</Company>
              <CompanyLoc>Riverside, CA | Sept 2015 - Apr 2016</CompanyLoc>
              <WorkDetail>
                - Assisted with inventory management, ensuring proper equipment availability for practices and meets.
              </WorkDetail>
              <WorkDetail>
                - Provided support to runners, coaches, and staff during training sessions and competitions.
              </WorkDetail>
              <WorkDetail>
                - Collaborated in setting up and organizing track meets, ensuring smooth operations and adherence to schedules.
              </WorkDetail>
            </UList>
          </Experience>
        </ContentRight>
      </Content>
    </CVWrapper>
  )
}

export default CV
