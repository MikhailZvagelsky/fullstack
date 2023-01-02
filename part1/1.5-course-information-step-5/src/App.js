function Header(props) {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
}

function Part(props) {
  return (
    <><p>{props.part} {props.exercises}</p></>
  );
}

function Content(props) {
  const parts = props.course.parts;
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
}

function Total(props) {
  const sum = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  );
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
