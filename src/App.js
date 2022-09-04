import './App.css';
import Contact from './Contact';

function App() {
  // const date =new Date();
  // const hours = date.getHours();
  // let timeOfDay

  // if(hours < 12){
  //   timeOfDay = "morning";
  // }
  // else if(hours >= 12 && hours < 19){
  //   timeOfDay = "afternoon";
  // }
  // else {
  //   timeOfDay = "night";
  // }

  return (
    <div className="justify-c-sb display-flex ">
      <Contact
        image={"logo.svg"}
        name="Mr. Whiskerson 001"
        email="cat01@email.com"
      />
      <Contact
        image={"logo.svg"}
        name="Mr. Whiskerson 002"
        email="cat02@email.com"
      />
      <Contact
        image={"logo.svg"}
        name="Mr. Whiskerson 003"
        email="cat03@email.com"
      />
      <Contact
        image={"logo.svg"}
        name="Mr. Whiskerson 004"
        email="cat04@email.com"
      />
    </div>
  );
}

export default App;
