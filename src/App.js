import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Mars the new era for man kind" },
    
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"Perseverance rover."}
        subtitle={
          "NASA's Mars car to seek signs of ancient life. The Perseverance rover will hunt for signs of ancient life and cache samples for future return to Earth."
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Spacex X Mars"}
        subtitle={"SpaceX will hit a big milestone this year on its road to Mars, if all goes according to plan. The company is developing a giant rocket known as Starship to help make Mars colonization and a variety of other ambitious exploration feats possible."}
        flipped={true}
      />
    </div>
  );
}

export default App;
