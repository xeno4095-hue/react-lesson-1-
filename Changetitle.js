import React, {useState, useEffect} from "react"
//
// function PageTitle() {
//     const [count, setCount] = useState(0)
//
//     useEffect( () => {
//         document.title = `you clicked ${count} times`
//     }, [count])
//
//     return (
//         <>
//         <button onClick={ () => setCount(count + 1)}>+</button>
//         </>
//     )
//
// }
//

// function User() {
//     const [user, setUser] = useState(null)
//
//     useEffect(() => {
//         fetch('https://randomuser.me/api/\n')
//             .then(res => res.json())
//             .then(data => setUser(data.results[0]))
//     }, [])
//
//     if (!user) return <p>Загрузка...</p>
//
//     return (
//         <>
//             <div>
//         <h1>{user.name.first}</h1>
//         <h1>{user.name.last}</h1>
//                 </div>
//         </>
//     )
// }

function Studentka() {
  const students = ['Anvar', 'Ali', 'Tursunxon', 'Madina', 'Guli']
  const [user, setUser] = useState(null)

  useState( () => {
      setInterval(() => {
          const index = Math.floor(Math.random() * students.length)
          setUser(students[index])
      }, 3000)
  })
   return (
       <>
       <h1>{user}</h1>
       </>
   )

}

export default Studentka
