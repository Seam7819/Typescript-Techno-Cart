"use strict";
{
    // spread operator 
    // rest operator 
    const bros1 = ['maidul', 'saidul', 'miqdad', 'mehedi'];
    const bros2 = ['ratan', 'nurul', 'apon', 'abdur', 'mursalin'];
    // here it seems like we push full an array. 
    // but we have to push one by one element 
    //for this we have to use spread operator to push the elements of array.
    bros1.push(...bros2);
    const favFood = {
        name1: 'khichuri',
        name2: 'biryani',
        name3: 'tehari',
        name4: 'kacchi'
    };
    const favDrinks = {
        name5: 'kitkatSHake',
        name6: 'coldCoffee',
        name7: 'strwaberi'
    };
    const allFoods = Object.assign(Object.assign({}, favFood), favDrinks);
    // rest operator 
    const greetFriends = (...friends) => {
        friends.forEach(friend => {
            console.log(`hi ${friend}`);
        });
    };
    greetFriends('abul', 'babul', 'kabul', 'bulbul');
}
