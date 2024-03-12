import React from 'react'
import Problems from '../assets/statements.json'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'

const ProblemStatements = () => {
  return (
    <div className='relative w-screen h-screen'>
      <div className="absolute flex flex-col items-center justify-center w-screen h-auto ">
        <Navbar />
        <div className='mt-7'>
          {
            Problems.map(problem => (
              <Card
                title={problem.title}
                problem={problem.problem}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProblemStatements