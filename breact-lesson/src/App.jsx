import Circle from './components/Circle';

const circleCount = 10
let m = new Array(circleCount).fill(null);

function App() {
  return (
    <>
      {m.map((x, i) => <Circle key={i} text = {i + 1} />)}
    </>
  );
}

export default App;
