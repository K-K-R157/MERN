const Section=({icon,sectionTitle,children})=>{
    return <div className='my-6 mx-4'>
        <div className='flex mb-3 items-center'>
            {icon}
            <span className='font-bold text-2xl'>{sectionTitle}</span>
        </div>
        {children}
    </div>
}
export default Section;