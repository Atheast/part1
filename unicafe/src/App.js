import React, {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return(
    <div>
      <Header text={"give feedback"}/>
      <Button handleClick={() => setGood(good+1)} text={"good"}/>
      <Button handleClick={() => setNeutral(neutral+1)} text={"neutral"}/>
      <Button handleClick={() => setBad(bad+1)} text={"bad"}/>
      <Statistic good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

const Statistic = ({good,bad,neutral}) => {
  if(bad+good+neutral === 0) {
    return(
      <div>
        <Header text={"statistic"}/>
        No feedback given
      </div>
    );
  }

  return (
    <div>
      <Header text={"statistic"}/>
      <table>
        <tbody>
          <Feedback type={"good"} amount={good}/>
          <Feedback type={"neutral"} amount={neutral}/>
          <Feedback type={"bad"} amount={bad}/>
          <Feedback type={"all"} amount={bad+good+neutral}/>
          <Feedback type={"average"} amount={((good*1)+(bad*-1))/(bad+good+neutral)}/>
          <Feedback type={"positive"} amount={(good/(bad+good+neutral))*100+"%"}/>
        </tbody>
      </table>
    </div>
  );
}

const Header = ({text}) => <h1>{text}</h1>;

const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>;

const Feedback = ({type,amount}) => (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
    </tr>
  );

export default App;
