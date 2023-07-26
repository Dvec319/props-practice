import './App.css';

const Child = (props) => {
  return (
    <div className='books'>
      <h1>{props.title}</h1>
    </div>
  )

}

const GrandChild = (props) => {
  return (
    <>
    <h1>{props.title}</h1>
    <h2>{props.author}</h2>
    </>
  )
}

const ChildVTwo = (props) => {
  return (
		<div className='books'>
			<h1>{props.title}</h1>
      <GrandChild
      author={props.author}
      title={props.title}
      />
		</div>
	);
}

const App = () => {
  return (
    <div className="App">
      <Child
      title="Halo: The Fall of Reach"
      />
      <Child
      title="Halo: Shadows of Reach"
      />
      <ChildVTwo
      author="Troy Denning"
      title="Halo: Divine Wind"
      />
    </div>
  );
}

export default App;
