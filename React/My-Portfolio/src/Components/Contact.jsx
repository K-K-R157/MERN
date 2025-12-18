import { Globe,Linkedin,Github,Instagram} from 'lucide-react';
import Section from './Section'
import SocialMedia from './SocialMedia';
const Contact=()=>{
    const Email='kundanrider555666@gmail.com';
    const phone='9534715863';
    const socialLinks = [
      { icon: <Linkedin />, title: "Linkedin", url: "https://in.linkedin.com" },
      { icon: <Github />, title: "Github", url: "https://github.com/" },
      { icon: <Instagram />, title: "Instagram", url: "https://www.instagram.com/" },
    ];
    return <div className='pb-5'><Section icon={<Globe className='mr-2' />} sectionTitle='Contact & Social Media'>
        <p className='text-slate-700 mb-2'>Email: {Email} <br/>Phone: {phone}</p>
        {socialLinks.map((link)=><SocialMedia icon={link.icon} key={link.title} title={link.title} url={link.url}/>)}
    </Section>
    </div>
}

export default Contact;