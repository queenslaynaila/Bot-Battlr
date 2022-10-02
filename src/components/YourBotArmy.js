import React,{useState} from "react";
import BotCard from "./BotCard";
function YourBotArmy({bots}) {
    
  function onSelectBot(bot){
    console.log(bot)
  }
 

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot)=>{
            return <BotCard   key={bot.id} onSelectBot= {onSelectBot}  bot={bot}></BotCard>
          })}
         
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
