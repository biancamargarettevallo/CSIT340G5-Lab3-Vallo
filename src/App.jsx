const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Content = (props) => (
  <div>
    <Part name={props.part1} exercises={props.exercises1} />
    <Part name={props.part2} exercises={props.exercises2} />
    <Part name={props.part3} exercises={props.exercises3} />
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
)

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  const part1 = 'CSIT341 - Industry Elective 2'
  const exercises1 = 3
  const part2 = 'CSIT342 - Industry Elective 3'
  const exercises2 = 3
  const part3 = 'CSIT440 - Industry Trends'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App