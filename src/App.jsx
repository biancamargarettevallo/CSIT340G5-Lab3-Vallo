const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = (props) => (
  <p>
    Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
  </p>
)

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  const part1 = {
    name: 'CSIT341 - Industry Elective 2',
    exercises: 3
  }
  const part2 = {
    name: 'CSIT342 - Industry Elective 3',
    exercises: 3
  }
  const part3 = {
    name: 'CSIT440 - Industry Trends',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App