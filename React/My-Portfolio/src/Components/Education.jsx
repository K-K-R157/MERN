import { BookOpen } from 'lucide-react';
import Section from './Section'
import Detail from './Detail';

const Education=()=>{
    return <Section icon={<BookOpen className='mr-2' />} sectionTitle='Education'>
        <Detail paragraph='Bachelor in Computer Science' details='Indian Institute Of Information techonology Guwahati' year='2023-2027'/>
        <Detail paragraph='Full Stack Web Developer' details='Knowledge Gate' year='2025'/>

    </Section>
}

export default Education;