import React,{useState,useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots,setBots] = useState([])
  const [myBot,setMyBot] = useState([])
 
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then(response=>response.json())
    .then(data=>setBots(data))
  })

  function handleDelete (bot){
    const removeFromArmy = myBot.filter((mybot)=>mybot.id !== bot.id)
    setMyBot(removeFromArmy)
    const filterbots = bots.filter((singlebot) => singlebot.id !==  bot.id);
    const   deleteConfig =  {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          } 
    }
    fetch(`http://localhost:8002/bots/${bot.id}`,deleteConfig)
      .then(()=>setBots(filterbots))
  }
  function enlistBots(bot){
     const selectedBot = myBot.find((boty)=>boty.id === bot.id)  
     if (!selectedBot){
      setMyBot(bots=>[...bots,bot])
     }   
  }
  function removeBort(bot){
    const filterRemove = myBot.filter((b)=>b.id !== bot.id)
    setMyBot(filterRemove)
  }
 
  return (
    <div>
      <YourBotArmy bots={myBot}   />
      <BotCollection enlistBots={enlistBots} onDeleteBot={handleDelete}  bots={bots} />
    </div>
  )
}

export default BotsPage;