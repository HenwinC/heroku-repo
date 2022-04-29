const express = require("express");

const server = express();

server.use(express.json());
// let PORT;
const PORT = process.env.PORT||3000;

server.listen(PORT, () => {
  console.log("Server listening")
});

// create => post
// read => get
// update => put
// delete => delete
const destinations = [];

const students = {
  bobby:{
    name:"bobby",
    intrest:"volleyball"
  },
  sally:{
    name:"sally",
    intrest:"soccer"
  },
  yurt:{
    name:"yurt",
    intrest:"football"
  }
}
let filteredStudents = Object.values(students)

server.get("/students", (req,res) => {
  const {name , intrest} = req.query;
  let filteredStudents = Object.values(students)
  if(intrest){
    filteredStudents = filteredStudents.filter((student) => student.intrest.includes(intrest.toLowerCase()))
  }
  if (name){
    const students = students[name.toLowerCase()];
  }
  if (student) {
    return res.send(student);
  }
 return res.send(filteredStudents)
})

server.post("/destinations", (req,res) =>{
const {destination, location, photo,description} = req.body

if(!destination || !location || destination.length == 0|| location.length ==0){
  return res.status(400).send({error: "Destination and location is required"})
}
if (photo && photo.length !==0){

}
const newDest ={
  destination,
  location,
  photo: photo && photo.length !==0 ? photo : "yurt",
  description: description && description.length !==0 ? description : "",
}

 destinations.push(newDest)
 res.redirect(303,"/destinations")
})

server.get("/destinations", (req,res)=> {
  res.send(destinations);
});