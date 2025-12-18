import { Briefcase } from 'lucide-react';
import Section from '../Section'
import Project from './Project';
const Projects=()=>{
    const projectList = [
      {
        title: "E-commerce Platform",
        desc: "Developed a fully-functional e-commerce platform with user authentication, product management, and payment integration.",
        techUsed: ["React", "Node.js", "MongoDB", "Stripe"],
      },

      {
        title: "Social Media Dashboard",
        desc: "Created a responsive dashboard for social media analytics, featuring real-time data visualization and reporting.",
        techUsed: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      },
    ];
    
    return <Section icon={<Briefcase className='mr-2' />} sectionTitle='Projects'>
        {projectList.map((list)=><Project key={list.title} title={list.title} desc={list.desc} techUsed={list.techUsed}/>)}
    </Section>
}

export default Projects;