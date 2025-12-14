function isIdenticalProduct(obj1,obj2){
    if(obj1==obj2)
            return true;

    if(!obj1 || !obj2 || typeof obj1!=='object'|| typeof obj2!=='object')
            return false;

    let keys1=Object.keys(obj1);
    let keys2=Object.keys(obj2);

    if(keys1.length!==keys2.length)
            return false;


    for(let key of keys1){
        if(!keys2.includes(key) || !isIdenticalProduct(obj1[key],obj2[key]))
            return false;
    }

    return true;
}

let student = {
    firstName: 'Raju',
    lastName: 'Kumar',
    age: 20,
    salary:20000,
    address: {
        houseNo: 10,
        road: 'MG Road',
        city: 'Bangalore',
        state: 'Karnataka',
        gali:29
    },
    subjects: ['Maths', 'Science', 'English'],
    feesPaid: true,

    printName:function(){
        console.log('Name : ',this.firstName, this.lastName);
    }
};

let student2 = {
    firstName: 'sonu',
    lastName: 'Kumar',
    age: 22,
    married:true,
    address: {
        houseNo: 10,
        road: 'MG Road',
        city: 'nagpur',
        state: 'mumbai',
        wardno:10,
        family:{
            father:'mohanlal',
            mother:'smt devi'
        }
    },
    subjects: ['Maths', 'Science', 'English'],
    feesPaid: true,

    
    printName:function(){
        console.log('Name : ',this.firstName, this.lastName);
    }
};

// console.log(student['age1']);
console.log('student 2 :',JSON.stringify(student2));


function mergeTwoObjects(obj1,obj2){
    if(obj1===obj2)
            return obj2;

    // console.log("CALL:", obj1, obj2);


    if(typeof obj1!='object' && typeof obj2!='object')
            return obj2;

    if(obj1===null && obj2)
        return obj2;

    if(obj2===null && obj1)
        return obj1;

    let obj3;

    
    if(Array.isArray(obj1) && Array.isArray(obj2))
        obj3=[];
    else if(!Array.isArray(obj1) && !Array.isArray(obj2))
        obj3={};
    else
        return 'Object are not of same type';


    const keys1=Object.keys(obj1);
    const keys2=Object.keys(obj2);

    let common=keys1.filter(item=>keys2.includes(item));

    let Ukeys1=keys1.filter(item=>!keys2.includes(item));

    let Ukeys2=keys2.filter(item=>!keys1.includes(item));

    for(let key of common){
        obj3[key]=mergeTwoObjects(obj1[key],obj2[key]);
    }

    for(let key of Ukeys1){
        obj3[key]=mergeTwoObjects(obj1[key],obj2[key]);
    }

    for(let key of Ukeys2){
        obj3[key]=mergeTwoObjects(obj1[key],obj2[key]);
    }

    return obj3;
}



// function mergeTwoObjects(obj1, obj2) {
//     // If either is not an object, return obj2 (obj2 has priority)
//     if (typeof obj1 !== 'object' || obj1 === null) return obj2;
//     if (typeof obj2 !== 'object' || obj2 === null) return obj2;

//     // Initialize result as array or object
//     let result = Array.isArray(obj1) && Array.isArray(obj2) ? [] : {};

//     let keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

//     keys.forEach(key => {
//         if (key in obj1 && key in obj2) {
//             result[key] = mergeTwoObjects(obj1[key], obj2[key]);
//         } else if (key in obj2) {
//             result[key] = obj2[key];
//         } else {
//             result[key] = obj1[key];
//         }
//     });

//     return result;
// }


let obj3=mergeTwoObjects(student,student2);
console.log(obj3.address.family === student2.address.family); 


obj3.address.family.father='rohanlal';


console.log(JSON.stringify(obj3));
console.log(JSON.stringify(student2));


// console.log(obj3.address.family === student2.address.family); 
