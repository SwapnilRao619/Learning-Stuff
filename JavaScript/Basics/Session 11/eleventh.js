// const student={ //Objects are basically having behaviors and procedures.
//     n: "swapnil",
//     college: "MSRIT",
//     age: 20,
//     printdet: function(){
//         console.log(this.age) //this.age means student.age
//     }
// }
// console.log(student)
// student.printdet()
// const emp={
//     salary:10000,
//     tax:200,
//     fa(){ //This too is accepted.
//         console.log(10000-200)
//     } //Beyond this, theres something called as a prototype which basically has a lot of methods and functions under it. So whenever an object is made, it automatically inherits properties from prototype.
// }
// emp.fa()
// const bp={
//     salary:10000,
//     age:20,
//     tax:"20%"
// }
// const swapnilrao={
//     name:"swapnil rao"
// }
// const karanrao={
//     name:"swapnil rao"
// } //Useful in reproducing the blueprint.
// karanrao.__proto__=bp
// swapnilrao._proto__=bp //If object and prototype have same methods/functions, then the object's one will be called.
// class kcmusic{
//     constructor(bpm,beattag){
//         this.bpm=bpm
//         console.log(bpm,beattag)
//     }
//     sample(){
//         console.log("Finding the sample.")
//     }
//     drum(){
//         console.log("Adding the drums.")
//     }
// }
// let beat1= new kcmusic(96,"Kon Carne") //new invokes constructor, so the bpm and "Kon Carne" is automatically printed for both.
// let beat2 = new kcmusic(92,"Kon Carne")
// beat1.sample()
// let beat3=new kcmusic() //undefined is not printed.
// class producer{
//     makebeats(){
//         console.log("Make beats.")
//     }
//     findsamples(){
//         console.log("Find/Make samples.")
//     }
//     adddrums(){
//         console.log("Add drums.")
//     }
// }
// class rapproducer extends producer{ //rapproducer is a subset of producer and thus inherits properties from producer or in a way extends it.
//     chopsamples(){
//         console.log("Chop up samples.")
//     }
//     clearsamples(){
//         console.log("Clear samples.")
//     }
//     findsamples(){
//         console.log("Find samples.") //If same methods in child than parents, then child's method is overwritten. Method overwriting.
//     }
// }
// let koncarne=new rapproducer()
// class person{
//     constructor(name){
//         console.log("PERSON")
//         this.person=person
//         this.name=name
//     }
//     eat(){
//         console.log("Eat.")
//     }
//     sleep(){
//         console.log("Sleep.")
//     }
// }
// class engineer extends person{
//     constructor(name){
//         // this.engineer=engineer // Just this line gives error as you cant use "this" keyword in a inherited class.
//         super(name);
//         console.log("ENGINEER")
//         this.engineer=engineer
//     }
//     work(){
//         console.log("Work.")
//     }
// }
// let sr=new engineer("Swapnil Rao") //First, it enters the child constructor and then as soon as super() is used, the moves to the parent constructor and then once that is executed, comes below to the super().
// class user{
//     constructor(name,email){
//         this.name=name
//         this.email=email
//     }
//     viewdata(){
//         console.log("Data.")
//     }
// }
// let s1=new user("swapnil rao","sr@gmail.com")
// let s2=new user("rahul","rahul1@gmail.com")
// s2.viewdata()
// class admin extends user{
//     constructor(name,email){
//         super(name,email)
//     }
//     editdata(){
//         console.log("New data.")  
//     }
// }
// let a1=new admin("admin","admin@gmail.com")
// let a=5
// let b=10
// console.log(a,b)
// console.log(a,c) //Error disrupts the flow.
// console.log(a)
// console.log(b)
// try{ //Thus, try-catch block to avoid it.
//     console.log(a,c)
// } catch(err){
//     console.log(err)
// }