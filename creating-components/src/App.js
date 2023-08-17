
import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary="1000" position="Developer" company="Google" />
      <Job salary={1000} position="Developer" company="Facebook" />
      <Job salary={2000} position="Developer" company="Amazon" />
    </div>
  );
}
function Job(props) {
  return(
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </div>
  );
}

export default App;
