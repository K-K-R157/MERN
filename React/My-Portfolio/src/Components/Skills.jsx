import { Code } from 'lucide-react';
import Section from './Section'
import Pills from './pills';
const Skills=()=>{
    const skillTitles = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"];
    return <Section icon={<Code className='mr-2' />} sectionTitle='Skills'>
        <div className='flex flex-wrap'>
        {skillTitles.map((title)=><Pills key={title} pillsName={title}/>)}
        </div>
    </Section>
}

export default Skills;