class Person {
    constructor(firstName,lastName,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
function showtable() {
    
    const person1 = new Person(firstName.value, lastName.value, email.value);
for(const key in person1){
    console.log(key)
    tbKey.innerHTML += `<td>${key}</td>`
    tbVal.innerHTML += `<td>${person1[key]}</td>`
}
}