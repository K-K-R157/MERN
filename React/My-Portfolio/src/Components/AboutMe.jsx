import {User} from 'lucide-react'
import Section from './Section'
const AboutMe=()=>{
    return <Section className='mt-2'icon={<User className='mr-2' />} sectionTitle='About Me'>
        <p className='text-slate-700 '>I'm a passionate full stack developer with 5 years of experience in
        building web applications. I love creating efficient, scalable, and
        user-friendly solutions to complex problems.</p>
    </Section>
}

export default AboutMe;