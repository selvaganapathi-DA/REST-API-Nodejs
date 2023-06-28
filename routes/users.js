import express from 'express';

import { users,createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();
const users = [
    {
        "userId": "selvar",
        "jobTitle": "Developer",
        "firstName": "selvaganapathi",
        "lastName": "R",
        "employeeCode": "SEL0110",
        "region": "IND",
        "phoneNumber": "1111111",
        "emailAddress": "selvamecsoft@gmail.com"
    },
    {
        "userId": "ganapr",
        "jobTitle": "Developer",
        "firstName": "sganapathi",
        "lastName": "R",
        "employeeCode": "SEL01240",
        "region": "IND",
        "phoneNumber": "222221111",
        "emailAddress": "selvsoft@gmail.com"
    }

]
router.get('/', getUsers);

router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
});

router.post('/',(req,res) =>{
    const user = req.body;
    users.push(users);
    res.send(`User with the name ${user.firstname} added to the database`);
});

router.get('/:id', (req,res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
     const { id } = req.params;
     users = users.filter((user) => user.id === id);
     res.send(`User with the id ${id} deleted from the database.`)

});

router.patch('/:id',() => {
    const { id } = req.params;
    const { firstName,lastName,jobTitle } = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName =  lastName;
    }
    if(jobTitle){
        user.jobTitle = jobTitle;
    }
    res.send(`User with the id ${id} has been updated`);
});

export default router;