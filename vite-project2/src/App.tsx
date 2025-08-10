import { useState, useEffect, useCallback, useMemo, type MouseEvent, type KeyboardEvent } from "react";

interface User {
  id: number, 
  username: string
}


type fibFunc = (n: number) => number 

const fib: fibFunc = (n) =>  {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const mynum: number = 20

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    console.log('mounting')
    console.log('Users: ', users)

    return () => console.log('unmounting')
  }, [users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev=> prev + 1), [])

  const result = useMemo<number>(() => fib(mynum), [mynum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
    </div>
  )
}

export default App;