import { useState } from "react";
import Game from "./component/Game";
import Result from "./component/Result";
import { QUESTIONS } from "./questions.data";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = QUESTIONS[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if(index === question.correct) {
      setCorrect(correct + 1)
    }
  };

  return (
    <div className="">
      {step !== QUESTIONS.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
