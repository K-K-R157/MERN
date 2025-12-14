let student = {
    firstName: 'Raju',
    lastName: 'Kumar',
    age: 20,
    address: {
        houseNo: 10,
        road: 'MG Road',
        city: 'Bangalore',
        state: 'Karnataka',
    },
    subjects: ['Maths', 'Science', 'English'],
    feesPaid: true,

    printName:function(){
        console.log('Name : ',this.firstName, this.lastName);
    }
};

console.log(JSON.stringify(student));