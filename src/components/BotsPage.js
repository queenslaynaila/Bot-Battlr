import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots,setBots] = useState([])  
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((response)=>response.json())
    .then((data)=>setBots(data))
   },[])
  
  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots} />
    </div>
  )
}

export default BotsPage;
