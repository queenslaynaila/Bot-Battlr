import React from "react";
import BotCard from "./BotCard";
function BotCollection({bots}) {
  console.log(bots)

   
  const botsList = bots.map((bot)=>{
    return (
      <BotCard bot={bot}></BotCard>
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
