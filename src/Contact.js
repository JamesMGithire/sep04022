import logo from './logo.svg';
export default function Contact({name,email}) {
    console.log();
    return (
        <div className='bg-white bxshadow br9px  width300px text-a-l margin20px'>
            <div className='bg-black height100px display-flex br9px'>
                <img src={logo} className="App-logo text-a-c " alt="" />
            </div>
            <div className=''>
                <h2>{name}</h2><br/>
                <p>(212) 555-1234</p>
                <p>{email}</p>
            </div>
        </div>
    );
}