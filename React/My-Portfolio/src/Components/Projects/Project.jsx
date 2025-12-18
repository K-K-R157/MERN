import TechPills from './TechPills';


const Project=({title,desc,techUsed})=>{
    return (
      <div className='rounded shadow-md p-4 pl-6 mb-2'>
        <div className="my-2">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="text-slate-700 ">{desc}</p>
        </div>
        <div className="flex flex-wrap">
          {techUsed.map((title) => (
            <TechPills key={title} pillsName={title}/>
          ))}
        </div>
      </div>
    );
}

export default Project;