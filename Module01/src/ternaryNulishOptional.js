"use strict";
var _a;
{
    // ternary operator 
    const age = 18;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? 'adult' : 'notAdult';
    console.log(isAdult);
    //  nulishcoalacing operator 
    // its work only null and undefined
    //here if we give null or undefined we can get guest but 
    // if we give value or empty string then get those
    const isAuthenticate = null;
    const result = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : 'guest';
    console.log(result);
    const user = '';
    const isThere = user !== null && user !== void 0 ? user : 'sakil';
    console.log(isThere);
    // optional chaining 
    const student = {
        name: 'shihab',
        address: {
            city: 'Dhaka'
        },
        contact: 39287362
    };
    const getInfo = (_a = student === null || student === void 0 ? void 0 : student.address) === null || _a === void 0 ? void 0 : _a.city;
    console.log(getInfo);
}
