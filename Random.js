import React, {useState} from "react";

function Random() {
  const names = ['xabi', 'raxmadchoy', 'artur', 'kirill']
    const [name, setName] = useState(names[0])
  return (
      <>
          <h1>{name}</h1>
          <button onClick={()  => setName(names[(Math.random() * names.length)])}>rickroll</button>
      </>
  )
}
export default Random