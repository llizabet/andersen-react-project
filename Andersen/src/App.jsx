import "./App.css";
import Card from "./Card";
import Michael from "./assets/Michael.jpg";
import Ladies from "./assets/Ladies.jpg";
import Hokum from "./assets/Hokum.jpg";
import Prada from "./assets/Prada.jpg";
import Project from "./assets/Project.jpg";
import Supergirl from "./assets/Supergirl.jpg";
import { Routes, Route } from "react-router-dom";
import CardPage from "./CardPage";

function App() {
  return (
      <Routes>
      <Route
        path="/"
        element={
          <div className="card-list">
            <div className="title-block">
              <h1>Absolute Cinema</h1>
            </div>
            <Card
              id={1}
              image={Michael}
              title="Michael"
              text="biographical musical drama, 2026"
            />
            <Card
            id={2}
              image={Ladies}
              title="Ladies First"
              text="satirical comedy, 2026"
            />
            <Card 
            id={3}
            image={Hokum} 
            title="Hokum" text="horror-thriller, 2026" 
            />
            <Card
              id={4}
              image={Prada}
              title="The Devil Wears Prada"
              text="comedy-drama, 2026"
            />
            <Card
            id={5}
              image={Project}
              title="Project Hail Mary"
              text="hard science fiction novel, 2026"
            />
            <Card
            id={6}
              image={Supergirl}
              title="Supergirl"
              text="science fiction and adventure, 2026"
            />
          </div>
        }
      />

        <Route path="/card/1" element={<CardPage title="Michael" description="Michael (2026) is an Antoine Fuqua-directed musical biopic chronicling the life of pop icon Michael Jackson. Starring his real-life nephew Jaafar Jackson, the film covers his trajectory from a Jackson 5 child star to a global solo phenomenon, exploring his artistic process, family trauma, and relentless ambition."/>}/>
        <Route path="/card/2" element={<CardPage title="Ladies First" description="Ladies First is a 2026 Netflix comedy-satire starring Sacha Baron Cohen and Rosamund Pike. It follows a chauvinistic advertising executive who wakes up in a parallel universe dominated by women. To return to his normal life, he must navigate the matriarchal society and compete against a former colleague."/>}/>
        <Route path="/card/3" element={<CardPage title="Hokum" description="Hokum (2026) is a psychological folk-horror film directed by Damian McCarthy, starring Adam Scott as a cynical novelist who travels to a remote Irish inn to scatter his parents' ashes. When a local woman vanishes, he plunges into a horrifying mystery involving local folklore and a witch trapped in the honeymoon suite."/>}/>
        <Route path="/card/4" element={<CardPage title="The Devil Wears Prada" description="The 2006 comedy-drama film The Devil Wears Prada follows Andy Sachs, an aspiring, no-nonsense journalist in New York who lands a job as the personal assistant to Miranda Priestly, the ruthless and demanding editor-in-chief of Runway, the world's most prestigious fashion magazine."/>}/>
        <Route path="/card/5" element={<CardPage title="Project Hail Mary" description="Project Hail Mary is a sci-fi adventure directed by Phil Lord and Christopher Miller, starring Ryan Gosling as Dr. Ryland Grace, a middle-school teacher who wakes up alone on a spaceship with amnesia. He soon uncovers an interstellar mission to stop a microscopic, sun-eating organism that is causing Earth's sun to die."/>}/>
        <Route path="/card/6" element={<CardPage title="Supergirl" description="Directed by Craig Gillespie, the 2026 Supergirl film follows Kara Zor-El on a gritty intergalactic journey of vengeance. Celebrating her 21st birthday, she teams up with her dog Krypto and the young Ruthye Marye Knoll to hunt down a ruthless adversary who brings tragedy too close to home."/>}/>
    </Routes>
  );
}

export default App;
