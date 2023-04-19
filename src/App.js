import "./App.css";
import Profile from "./Profile/Profile.js";
import img from "./image.jpg";

function App() {
  const fullName = `Ahmed CHAKROUN`;
  const bio = `I am a highly motivated professional with 2 years of experience in web developement.
   Skilled in React js , I am dedicated to delivering high-quality work and driving business success.`;
  const profession = `React js Developer`;
  const handleName = () => {
    alert(`Hello ${fullName}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Profile
          fullName={fullName}
          bio={bio}
          profession={profession}
          handleName={handleName}
        >
          <img style={{ borderRadius: "50%" }} src={img} alt="Profile img" />
        </Profile>
      </header>
    </div>
  );
}

export default App;
