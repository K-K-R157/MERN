

const Paragraph=()=>{
    return <>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
        voluptas aut aliquid minima dignissimos sint a obcaecati ad mollitia quas!
        </p>
        <button className="red-button">Logout</button>
    </>;
}

// here we have not imported Button.css but css of red button from Button.css will also apply on this red button because css file is global 

export default Paragraph;