import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots,setBots] = useState([])  
  const [selectedBots, setSelectedBots] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((response)=>response.json())
    .then((data)=>setBots(data))
   },[])
  
  function deletebot(bot){
    const filterbots = bots.filter(
			(singlebot) => singlebot.id !==  bot.id
		);
      
    const   deleteConfig =  {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      } 
    }
    fetch(`http://localhost:8002/bots/${bot.id}`,deleteConfig)
      .then(()=>setBots(filterbots))
    
  }
   
  return (
    <div>
      <YourBotArmy bots={selectedBots}/>
      <BotCollection deleteBot={deletebot} bots={bots} />
    </div>
  )
}

export default BotsPage;
