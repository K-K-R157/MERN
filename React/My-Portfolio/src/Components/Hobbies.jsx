import { Heart } from 'lucide-react';
import Section from './Section'
import List from './List';
const Hobbies=()=>{
  const hobbies = ["Photography", "Hiking", "Playing guitar", "Reading sci-fi novels"];
    return <Section icon={<Heart className='mr-2' />} sectionTitle='Hobbies & Interests'>
    <List lists={hobbies}/> 
    </Section>
}

export default Hobbies;