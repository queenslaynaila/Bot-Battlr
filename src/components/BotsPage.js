import React, { useState , useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

 

function BotsPage() {
  

  const [bots, setBots] = useState([]);
  const [myBot,setMyBot] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(setBots)
  },[])

  function enlistBot(bot){
    const selectedBot = myBot.find((boty)=>boty.id === bot.id)  
    if (!selectedBot){
     setMyBot(bots=>[...bots,bot])
    }   
  }

  function removeBot(bot){
    const filterRemove = myBot.filter((b)=>b.id !== bot.id)
    setMyBot(filterRemove)
  }

  function deleteBot(bot){  
    const filterbots = bots.filter((singlebot) => singlebot.id !==  bot.id);
    const   deleteConfig =  {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          } 
    }
    const deleteFromArmy = myBot.filter((armybot)=>armybot.id !== bot.id)
    setMyBot(deleteFromArmy)
    fetch(`http://localhost:8002/bots/${bot.id}`,deleteConfig)
      .then(()=>setBots(filterbots))   
  }

  return (
    <div>
      <YourBotArmy 
      bots={myBot}
      removeBot ={removeBot}
      deleteBot={deleteBot}
      />

      <BotCollection 
      bots={bots}
      enlistBot={enlistBot}
      deleteBot={deleteBot}
      />
    </div>
  )
}

export default BotsPage;