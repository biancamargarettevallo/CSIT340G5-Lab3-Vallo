const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = (props) => (
  <p>
    Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
  </p>
)

const Footer = (props) => (
  <footer>
    {props.name} - {props.courseCode} - {props.section}
  </footer>
)

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'

  const parts = [
    { name: 'CSIT341 - Industry Elective 2', exercises: 3 },
    { name: 'CSIT342 - Industry Elective 3', exercises: 3 },
    { name: 'CSIT440 - Industry Trends', exercises: 3 } 
  ]

  const studentName = 'Bianca Margarette G. Vallo'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App