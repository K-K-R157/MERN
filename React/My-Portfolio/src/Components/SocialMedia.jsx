const SocialMedia=({icon,title,url})=>{
    return <a href={url} className="flex py-1 text-blue-500 hover:text-blue-800">
            {icon} {<span className="pl-1.5 ">{title}</span>}
        </a>
}

export default SocialMedia;