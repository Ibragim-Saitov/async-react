import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
    return response.json()
    })
    .then((json) =>{
    setData(json)
    setLoading(false)
    })
  
  },[])
  



  return (
    <div>
     <div>
          Todos:
          </div>
          {loading ? (
          <div>
             loading...         
          </div>
      ) : 
      (data.map(item =>{
        return (
          <div>
          <div>
            {item.title}
          </div>
          </div>
        )
      }))
      }
    </div>
);
}

export default App
