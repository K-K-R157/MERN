import photo from '../assets/kundan photo.jpg'

const Header=()=>{
    return <header className="bg-blue-500 rounded py-6 px-3 text-white flex justify-between align-middle">
        <div>
            <h1 className="font-medium text-3xl">Kundan Kumar</h1>
            <p className="text-md">Full Stack Developer</p>
        </div>
        <img className='w-12 rounded-full ' src={photo} alt=""></img>
    </header>
}

export default Header;