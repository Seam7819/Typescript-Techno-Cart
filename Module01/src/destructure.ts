{

    // object destructure in ts 

const userData = {
    nameUser : "snu",
    contactNo : " 01973527363",
    color : "shemla",
    Address : {
        city : "Dhaka",
        road : "Kajla",
        HoldNo : "230"
    }
}

const {nameUser, Address: city} = userData;
// array distruring 

const myFriends = ['monika', 'konika', 'tonika','sokina'];
const [,, bestFriend ,...rest] = myFriends;

}