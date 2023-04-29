import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, enlistBot, deleteBot}) {
  // Your code here

  const mapBots = bots.map(bot => 
    <BotCard 
    key={bot.id}
    bot={bot}
    clickEvent={enlistBot}
    deleteBot={deleteBot}
    />)

  return (
   
    </div>
  );
}

export default BotCollection;