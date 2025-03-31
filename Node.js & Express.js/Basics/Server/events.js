// const EventEmitter=require("node:events") //Class returned
// const emitter = new EventEmitter()
// emitter.on("Order_Pizza", (size,topping)=>{console.log(`Order recieved! Baking a ${size} ${topping} pizza.`)})
// emitter.on("Order_Pizza",(size)=>{if(size=="large") console.log("\nComplimentary drink!")}) //Multiple event listeners
// console.log("To be noted that this message comes before the other messages as the .emit method calls the listeners (.on)")
// emitter.emit("Order_Pizza","large","mushroom")