{
    // its also tells about the type. The different between type and
    // interface is interface is only for object and it extend the type

    interface User  {
        name : string;
        Contact: number
    }

    interface UserAddress extends User {
        address : string
    }

    //before extend
    // const user : UserAddress = {
    //     name : 'SNu Seam',
    //     Contact : 378277,
    //     address : 'Dhaka'
    // }

    //after extend
    const user : UserAddress = {
        name : 'SNu Seam',
        Contact : 378277,
        address : 'Dhaka'
    }
}