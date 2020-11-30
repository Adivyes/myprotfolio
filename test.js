// var caseHero = Math.floor(Math.random()*10);
// switch (caseHero){
// case 1:
//         divMain.innerHTML = "sending spiderman" + caseHero;
// case 2:
//         divMain.innerHTML = "sending ironman"+ caseHero;
// case 3:
//         divMain.innerHTML = "sending hulk"+ caseHero;
// case 4:
//         divMain.innerHTML = "sending black panter"+ caseHero;
// case 5:
//         divMain.innerHTML = "sending Captain America "+ caseHero;
// case 6:
//         divMain.innerHTML = "sending thor"+ caseHero;
// case 7:
//         divMain.innerHTML = "sending Ant-Man"+ caseHero;
// case 8:
//         divMain.innerHTML = "sending Human Torch"+ caseHero;
// case 9:
//         divMain.innerHTML = "sending Mister Fantastic"+ caseHero;
//         break;
//         default:
//             divMain.innerHTML = "n/v"+ caseHero;
// }




// console.log(this)
// var lalala = {
//     name(){
//         console.log(this)
//     }
// }
// lalala.name();

// var divMain = document.getElementById('mainDiv');

// function grade() {
//    let whatgrade = Number(input.value)
    
// switch (whatgrade){

//     case 6:
//         divMain.innerHTML = 'שלום כיתה א׳'
//         break;
   
   
    
//     case 7:
//         divMain.innerHTML = 'שלום כיתה ב׳'
//         break;
//     case 8:
//         divMain.innerHTML = 'שלום כיתה ג׳'
//         break;
//     case 9:
//         divMain.innerHTML = 'שלום כיתה ד׳'
//         break;
//     case 10:
//         divMain.innerHTML = 'שלום כיתה ה׳'
//         break;
//     case 11:
//         divMain.innerHTML = 'שלום כיתה ו׳'
//         break;
//     case 12:
//         divMain.innerHTML = 'שלום כיתה ז׳'
//         break;
//     case 13:
//         divMain.innerHTML = 'שלום כיתה ח׳'
//         break;
//     case 14:
//         divMain.innerHTML = 'שלום כיתה ט׳'
//     case 15:
//         divMain.innerHTML = 'שלום כיתה י׳'
//         break;
//     case 16:
//         divMain.innerHTML = 'שלום כיתה יא׳'
//         break;
//     case 17:
//         divMain.innerHTML = 'שלום כיתה יב׳'
//         break;
//         default:
//             divMain.innerHTML = 'n/v'
// }
// }
// ------------------------------------------
// var solurs = ['red','green','blue','yellow','adiv','calculet','dellwer'];
// solurs.sort()
// // solurs.reverse()
// console.log(solurs);

// function firstChar(adiv){
//     let text = adiv.indexOf();
//     return text.charAt(0);
//     }
//     console.log( firstChar(' Rosa '));

// ------------------------------------------

var numorder = [0,1,2,3,4,5,6,7,8,9,10];
window.onload = () =>{
    document.getElementById('mixnum').innerHTML = numorder;
    // fixnumber.addEventListener("change",fixNum);
    // mixnumber.addEventListener("change",mixNum);
}             

function fixNum(){
    numorder.sort(function (a,b){return b-a});
    document.getElementById('mixnum').innerHTML = numorder;
}

function mixNum(){
    numorder.sort(()=> 0.5 - Math.random()) 
    document.getElementById('mixnum').innerHTML = numorder;

}

function creatbtn(){
    document.getElementById('mixnum').innerHTML = ""
for (let i = 0; i < numorder.length; i++) {
    document.getElementById('mixnum').innerHTML +=   `<button onclick=messegeNum(${numorder[i]})>${numorder[i]}</button>`
 
    
}
}

function messegeNum(num){
    switch (num){

        case 1:
            messagebtn.innerHTML = `נמוך מדי<br><img src="img/${num}.jpg" style="width: 200px;">`
            break;
        case 2:
            messagebtn.innerHTML = `כמעט אבל לא<br><img src="img/${num}.jpg" style="width: 200px;">`
            break;
        case 3:
            messagebtn.innerHTML = `עוד קצת והיית זוכה <br><img src="img/${num}.jpg" style="width: 200px;">`
            break;
        case 4:
            messagebtn.innerHTML = `זכית במקום הראשון<br><img src="img/${num}.jpg" style="width: 200px;">`
            break;
        case 5:
            messagebtn.innerHTML = `הגזמת, יותר מדי<br><img src="img/${num}.jpg" style="width: 200px;">`
            break;
        case 6:
            messagebtn.innerHTML = `אולי מקום שני, עוד קצת<br><img src="img/${num}.jpg" style="width: 200px;">`
            break;
        case 7:
            messagebtn.innerHTML = `ברכות! מקום שני<br><img src="img/${num}.jpg" style="width: 200px;">`
            break;
        case 8:
            messagebtn.innerHTML = `גם שלישי זה טוב<br><img src="img/${num}.jpg" style="width: 200px;">`
            break;
            default:
                messagebtn.innerHTML = `n/v`
    }
}