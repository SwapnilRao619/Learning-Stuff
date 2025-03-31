// const URL=require('../models/url')
// async function handleGenerateNewShortURL(req,res){
//     const body=req.body
//     if(!body.url) return res.status(400).json({error: "URL is required."})
//     const { nanoid } = await import('nanoid');
//     const shortID = nanoid(8);
//     await URL.create({
//         shortId: shortID,
//         redirectURL: body.url,
//         visitHistory:[]
//     })
//     return res.json({id: shortID})
// }
// async function handleRetrieveOriginalURL(req,res){
//     const shortId=req.params.shortId
//     const OGURL= await URL.findOneAndUpdate({
//         shortId
//     },{$push: {
//         visitHistory: {timestamp: Date.now()},
//     },})
//     res.redirect(OGURL.redirectURL)
// }
// async function handleAnalyticsForShortId(req,res){
//     const shortId=req.params.shortId
//     const result=await URL.findOne({shortId})
//     res.json({totalClicks: result.visitHistory.length, analytics:result.visitHistory})
// }
// module.exports={
//     handleGenerateNewShortURL,
//     handleRetrieveOriginalURL,
//     handleAnalyticsForShortId
// }