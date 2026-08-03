import { useState } from "react"


const Home = () => {

  const [title] = useState("REACT, YAY !!")
  return ( 
  <div>
    <h1>{title}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis necessitatibus, ipsum quidem ab excepturi, molestias amet 
            Reiciendis necessitatibus, ipsum quidem ab excepturi, molestias amet 
            explicabo quaerat rem cum accusamus alias quis tempore repudiandae enim unde 
            nobis voluptatum nihil!
        </p>
  </div>

  )
}
export default Home
