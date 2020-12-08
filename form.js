// class Numbtn {
//     id;
//     event;
//     value;
//     constructor(id,event,value) {
//         this.id=id;
//         this.event=event;
//         this.value=value;
//     }
//     btnClick(){
//         console.log(this.value);
//     }
// }
// let btnArray = [];
// for (let i = 1; i < 10; i++) {
//     const btnObject = new Numbtn(`btn${i}`,()=>{},i)
//     btnArray.push(btnObject)
// }
// btnArray.forEach(btnItem =>{
//     buttonsDiv.innerHTML += `<button id="${btnItem.id}" value="${btnItem.value}">${btnItem.value}</button>`
// })
// btnArray.forEach(btnItem =>{
//     document.getElementById(btnItem.id).addEventListener("click",()=>{btnItem.btnClick()})

// })



// console.log(btnArray);
// class Fields {
//     type;
//     name;
//     id;
//     placeholder;
    
    
//     constructor(type,name,id,placeholder) {
//         this.type = type;
//         this.name = name;
//         this.id = id;
//         this.placeholder = placeholder;

//     }
// }
// let fieldFirst = new Fields('text','First Name','nameid',"Name");
// let fieldLast = new Fields('text','Last Name','nameid',"Famely Name");

// let fieldEmail = new Fields('text','Your Email','nameid',"Email");
// let fieldAge = new Fields('number','Your Age','nameid',"Age");

// let field = [fieldFirst,fieldLast,fieldEmail,fieldAge];
// console.log(field);

// field.forEach(fielsItem =>{
//     ;formEl.innerHTML += `${fielsItem.name} :<br><input type="${fielsItem.type}" name="${fielsItem.name}" id="${fielsItem.id}" placeholder = "${fielsItem.placeholder}"><br>`
// })


//let fields = ['Name','lastName','email','Phone','Age'];
// const person1 = new Person();
// for(const personKey in person1) {
//     formEl.innerHTML += `${personKey}<br><input type="${personKey}" name="phone" id="${personKey}id"><br><br>`
// }










// function showtable() {
    
//     const person1 = new Person(firstName.value, lastName.value, email.value,Phone.value,Age.value);
// for(const key in person1){
//     console.log(key)
//     tbKey.innerHTML += `<td>${key}</td>`
//     tbVal.innerHTML += `<td>${person1[key]}</td>`
// }
// }

class Point{
    x;
    y;
    constructor(paramx, paramy){
        this.x = paramx;
        this.y = paramy;

    }
    static distance(stPoint,ndPoint){
        const distanceX = stPoint.x - ndPoint.x;
        const distanceY = stPoint.y - ndPoint.y;
    return Math.hypot(distanceX,distanceY)
    }
}
const firstPoint = new Point(10,17);
const secondPoint = new Point(8,5);
console.log(firstPoint);
console.log(secondPoint);

console.log(Point.distance(firstPoint,secondPoint));