import { useEffect, useState } from "react"

function Todo() {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) =>{
        return response.json()
    })
    .then((json) => {
        setData(json)
        setLoading(false)
    })
}, []);

function del(id) {
  setData(data.filter((item) => item.id !== id));
}


return (
    <div>
      <div>
        Todos:
    </div>
        {loading ? (
        <div>
            <span>loading...</span>
        </div>
        ) :(
        <ul>
        {data.map((item, index) => {
            return (
                <li key={index}
                >
                <span className=
                {item.completed !== true ? "item-text strike" : "item-text"
                }
                >
                    {item.title}
                    </span>
                <button onClick={() => del(item.id)}
                >
                X 
                </button>
                </li>
            );
          })}
          </ul>
        )}
    </div> 
);
}

export default Todo;