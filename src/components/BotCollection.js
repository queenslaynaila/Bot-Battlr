import React from "react";
import BotCard from "./BotCard";


function BotCollection({bots,deleteBot}) {

  const botsList = bots.map((bot)=>{
    return (
      <BotCard deleteBot={deleteBot} key={bot.id} bot={bot}></BotCard>
    )
  })
  return (
    <div className="ui four column grid">  
       <div className="row">
       {botsList}
       </div>    
    </div>
  );
}

export default BotCollection;
