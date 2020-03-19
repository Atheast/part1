import React, {useState} from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(6));
  let random = Math.floor(Math.random()*anecdotes.length);
  let most = votes.indexOf(Math.max(...votes));
  console.log(most);
  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    
    setVotes(copy);
  }

  return(
    <div>
      <Header text={"Anecdote of day"} />
      <Anecdotes anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={() => setSelected(random)} text={"next anecdote"}/>
      <Button handleClick={handleVotes} text={"vote"}/>

      <Header text={"Anecdote with most votes"} />
      <Anecdotes anecdote={anecdotes[most]} votes={votes[most]}/>
    </div>
  );
}

const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>;

const Header = ({text}) => <h1>{text}</h1>;

const Anecdotes = ({anecdote,votes}) => (
  <div>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>
)

export default App;
