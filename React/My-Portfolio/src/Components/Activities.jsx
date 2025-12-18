import { Award } from 'lucide-react';
import Section from './Section'
import List from './List';
const Activities=()=>{
    const curricularItems = [
        "Volunteer at local coding bootcamp for underprivileged youth",
        "Organizer of city-wide hackathon event",
        "Member of the University Chess Club",
    ];
    return <Section icon={<Award className='mr-2' />} sectionTitle='Extracurricular Activities'>
        <List lists={curricularItems}/>
    </Section>
}

export default Activities;