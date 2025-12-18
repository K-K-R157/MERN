const List=({lists})=>{
    return <ul className="list-disc mx-4">
        {lists.map(list=><li className='text-slate-700 ' key={list}>{list}</li>)}
    </ul>
}

export default List;