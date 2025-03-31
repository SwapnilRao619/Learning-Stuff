const express=require("express")
const router=express.Router()
const {handleGenerateNewShortURL,handleRetrieveOriginalURL,handleAnalyticsForShortId}=require('../controllers/url')
router.post("/",handleGenerateNewShortURL)
router.get("/:shortId",handleRetrieveOriginalURL)
router.get("/analytics/:shortId",handleAnalyticsForShortId)
module.exports=router