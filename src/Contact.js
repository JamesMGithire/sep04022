// import logo from "./logo.svg";
// let logo = "../public/logo192"
export default function Contact(props) {
    let image = props.image;
    console.log(typeof image);
    return (
        <div className='bg-white bxshadow br9px  width300px text-a-l margin20px'>
            <div className='bg-black height100px display-flex br9px'>
                <img src={`./${image}`}
                className="App-logo text-a-c " alt="" />
            </div>
            <div className=''>
                <h2>{props.name}</h2><br/>
                <p>(212) 555-1234</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}