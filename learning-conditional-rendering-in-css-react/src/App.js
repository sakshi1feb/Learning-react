import './App.css';
import {Planet} from './Planet';

function App() {
  const planets=[
    {name:"Mars",isGasPlanet:false},
    {name:"Jupiter",isGasPlanet:true},
    {name:"Earth",isGasPlanet:false},
    {name:"Neptune",isGasPlanet:true},
    {name:"Venus",isGasPlanet:false},
    {name:"Uranus",isGasPlanet:true},
  ];
  return(
    <div className="App">
     {
      planets.map((planet,key)=>{
        return(
         <Planet name={planet.name} isGasPlanet ={planet.isGasPlanet}/>
        )
      })
     }
    </div>
  );
}

export default App;
