const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>;

const Content = ({ parts }) =>
  <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </div>;

function Total({ parts }) {
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (<p><b>total of {sum} exercises</b></p>);
}

const Course = ({ course }) =>
  <>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>;

export default Course;