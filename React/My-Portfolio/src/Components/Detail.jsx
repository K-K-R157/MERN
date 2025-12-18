const Detail=({paragraph,details,year})=>{
    return <div className="my-2">
            <h1 className='font-bold text-lg'>{paragraph}</h1>
            <p className='text-slate-700 '>{details}, <span>{year}</span></p>
        </div>
}

export default Detail;