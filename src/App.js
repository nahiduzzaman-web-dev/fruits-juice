import logo from './logo.svg';
import './App.css';
import Fruits from './Components/Fruits/Fruits';
import Header from './Components/Header/Header';
import QuestionAnswer from './Components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div>
      <Header></Header>
      <Fruits></Fruits>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
