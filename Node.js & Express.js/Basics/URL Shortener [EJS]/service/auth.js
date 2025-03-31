const sessionIdToUser=new Map(); //Becomes empty everytime server restarted.
function setUser(id,user){
    sessionIdToUser.set(id,user);
}
function getUser(id,user){
    return sessionIdToUser.get(id);
}
module.exports={
    setUser,
    getUser
}