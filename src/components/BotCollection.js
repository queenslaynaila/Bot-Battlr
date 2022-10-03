import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots,onDeleteBot,enlistBots}) {

  function deleteBot(bot){
    onDeleteBot(bot)
  }
 const botCollection = bots.map((bot)=>{
  return <BotCard enlistBots={enlistBots} deleteBot={deleteBot} bot={bot} key={bot.id}></BotCard>
 })
  return (
    <div className="ui four column grid">
      <div className="row">
        {botCollection}
        
      </div>
    </div>
  );
  
}

export default BotCollection;