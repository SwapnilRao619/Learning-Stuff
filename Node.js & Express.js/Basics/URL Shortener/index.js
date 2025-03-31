// const express=require("express")
// const urlRoute=require("./routes/url")
// const {connectToMongoDB}=require("./connect")
// const { handleRetrieveOriginalURL,handleAnalyticsForShortId } = require("./controllers/url");
// const app=express()
// const PORT=3000
// app.use(express.json())
// connectToMongoDB('mongodb://127.0.0.1:27017/US').then(()=>{console.log("MongoDB connected!")}).catch((err)=>{console.log(err)})
// app.use("/url",urlRoute)
// app.get('/:shortId', handleRetrieveOriginalURL);
// app.get("/analytics/:shortId",handleAnalyticsForShortId)
// app.listen(PORT,()=>{console.log(`Server listening at http://localhost:${PORT}.`)})