{

    //when we know about the type then we can call it type assertion
    let anything : any;
    anything = 123;
    anything = 'string';

    (anything as string);

    const kgTogm = (value : string | number | undefined) =>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000;
            return convertedValue;
        }
        if(typeof value === 'number'){
            return value * 1000;
        }
    }
    const result1 = kgTogm(123) as number;
    console.log(result1);

}