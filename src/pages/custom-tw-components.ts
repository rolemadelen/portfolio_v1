import tw from 'tailwind-styled-components';

export const CVWrapper = tw.div`
flex
flex-col 
py-8 
px-12 
max-w-4xl 
mx-auto
`

export const Header = tw.div`
flex
justify-between
items-center
mb-12
`

export const Name = tw.div`
text-5xl
tracking-tight
text-[#5172b7]
`

export const Role = tw.div`
font-[500] 
text-xs 
text-[#333] 
uppercase
`

export const Contact = tw.div`
leading-tight
text-[0.8rem]
text-[#777]
`

export const ContactLink = tw.div`
text-[#333]
`

export const Content = tw.main`
flex 
justify-between
text-[#333]
`

export const ContentLeft = tw.div`
left
mr-4
flex-auto
`

export const ContentRight = tw.div`
right
flex-auto
w-[30rem]
`

export const Heading = tw.h3`
mb-2 
text-lg
text-[#5172b7]
font-[500]
`

export const School = tw.li`
my-1
font-[500]
`

export const Major = tw.li`
my-1 
text-xs
`

export const Year = tw.li`
my-1 
text-xs 
text-[#777]
`

export const Wrapper = tw.div`
mb-8
text-[0.8rem]
`

export const LanguageItem = tw.li`
my-1
`

export const Proficiency = tw.span`
ml-2
text-[#888]
`

export const UList = tw.ul`
mb-4
`

export const Company = tw.li`
font-[500]
text-[0.9rem]
`

export const CompanyLoc = tw.li`
text-xs 
mb-2 
text-[#777]
`

export const WorkDetail = tw.li`
mb-2 
leading-tight
`

export const Languages = Wrapper;
export const Education = Wrapper;
export const Skills = Wrapper;
export const Experience = Wrapper;
