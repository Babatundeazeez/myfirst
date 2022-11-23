
const box = document.querySelector('.box');
const cancel = document.getElementById('cancel');
const logme = document.getElementById('logme')
const dashBoard = document.querySelector('.dashboard');
const firstLayer = document.querySelector('.first-layer')
const finger = document.getElementById('fingerprint');
const modal = document.querySelector('.modal');
const contentList = document.getElementById('content1');
const greet = document.getElementById('greet');
const times = document.getElementById('times');
const menu = document.getElementById('menu');
const cards = document.getElementById('my-card');
const myCard = document.querySelector('.cards')


const d = new Date();
    const m = d.getMonth() +1;
    const dD = d.getDate();
    const y = d.getFullYear();
    const hr = d.getHours(  12);
    const min = d.getMinutes();

   


const menuHandler = ()=>{
    cardList();
    
   
}


const myDash = [
    {name : 'My Account', image : '<i class="fa fa-user-o m-2"></i>'},
    {name : 'Transaction', image : '<img src="https://cdn0.iconfinder.com/data/icons/user-interface-mono-set/512/user-interface-arrow-change-data-exchange-transfer-256.png" width="10%">'},
    {name : 'Pay Bills', image : ' <img src="https://cdn4.iconfinder.com/data/icons/ecommerce-shopping-20/64/ecommerce_receipt-256.png" alt="" width="10%">'},
    {name : 'Pay airtime', image : '<img src="./image/TopUp-removebg-preview.png" alt="" width="10%">'},
    {name : 'Transfer Money', image : '<img src="https://cdn4.iconfinder.com/data/icons/data-20/512/N_T_1216Artboard_1_copy_9-256.png" alt="" width="10%">'},
    {name : 'Beneficiary management', image : '<img src="https://cdn1.iconfinder.com/data/icons/ecological-interaction/64/trait-heir-copy-child-similar-512.png"   alt="" width="10%">'},
    {name : 'Card Service', image : '<img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-card-256.png"   alt="" width="10%">'},
    {name : 'Self service', image : '<img src="https://cdn0.iconfinder.com/data/icons/web-con-set-37-line/128/self-service_automation_gear_service_self-help_volunteer_self-256.png"   alt="" width="10%">'},
    {name : 'Loan', image : '<img src="https://cdn0.iconfinder.com/data/icons/finance-86/64/loan-256.png"   alt="" width="10%">'},
    {name : 'Digital Payment', image : '<img src="https://cdn1.iconfinder.com/data/icons/financial-45/24/card-512.png"   alt="" width="10%">'},
    {name : 'Lifestyle', image : '<img src="https://cdn4.iconfinder.com/data/icons/drink-hand-drawn/39/drink_hand_drawn_icon__glasses_2-256.png"   alt="" width="10%">'},
   // {name : 'My dashboard', image : '<i class="fa fa-user-o m-2"></i>'},
]


const showsCard = () =>{
    
    for ( const acc of myDash){
        cards.innerHTML +=`
        <div class="acc hov">
        ${acc.image}
        <div class="p-2 text-white m-1 ">${acc.name}</div>
        </div>`
    }
    

      console.log(cards);  
}
showsCard();



    
const greeting = () =>{
    if (hr == 12 || hr <= 12){
    greet.innerHTML = 'Good Morning, Mr Azeez Babatunde'
    }
    else if ( hr > 12 || hr <= 16){
        greet.innerHTML =  `Good Afternoon, Mr Azeez Babatunde`
    }
    else{
        greet.innerHTML = `Good Evening, Mr Azeez Babatunde`
    }
    console.log(greet);
}
greeting()

const myDate = ()=>{
    

     times.innerHTML = `Last login ${dD}/${m}/${y}. ${hr}:${min} `;
     console.log(times);
}
myDate();

const first = [
        {name: 'QUICK TRANSFER', img : '<img class="imgg mt-1" src="./image/arrows-left-yello-removebg-preview.png" alt="myImage" width="30%">'},
        {name : 'QUICK AIRTIME', img : '<img class="imgg mt-1" src="./image/airtime-yello-removebg-preview.png" alt="myImage" width="30%">'},
        {name : 'QUICK QR', img : '<img class="imgg mt-1" src="./image/newQR-removebg-preview.png"alt="" width="30%">'},
        {name: 'BALANCE ENQUIRY', img : '<img class="imgg mt-1" src="./image/balnace-enquiry-removebg-preview.png" alt="" width="25%">'},
        {name : 'HELP/CONTACTUS', img : '<img class="imgg mt-1" src="./image/contact-icon-te.png" alt="" width="30%">'},
        {name : 'INTERNET/BANKING', img : '<img class="imgg mt-1" src="./image/internet2-removebg-preview.png" alt="" width="30%">'},
        {name : 'ATM/BRANCH LOCATION', img : '<img class="imgg mt-1" src="./image/compassLocation-removebg-preview.png" alt="" width="30%">'},
        {name : 'AGENT LOCATION', img : '<img class="imgg mt-1" src="./image/agentLocation-removebg-preview.png" alt="" width="30%">'},
         {name : 'FIRST REFERAL', img : '<img class="imgg mt-1" src="./image/refferal-removebg-preview.png" alt="" width="30%">'}
]
console.log(first);

const dashboardArray =[
    {image : '<img  class="m-3" src="./image/arrows-left-yello-removebg-preview.png" alt="" width="40%">', dashName : 'Transfer'},
    {image : '<img  class="m-3" src="./image/payBills-removebg-preview.png" alt="" width="50%">', dashName : 'Pay Bills'},
    {image : '<img  class="m-3" src="./image/TopUp-removebg-preview.png" alt="" width="40%">', dashName : 'Buy Airtime'},
    {image : '<img  class="m-3" src="./image/newQR-removebg-preview.png" alt="" width="40%">', dashName : 'QR Payment'},
    {image : '<img  class="m-3" src="./image/loan-removebg-preview.png" alt="" width="40%">', dashName : 'Loan'},
    {image : '<img  class="m-3" src="./image/virtual-card1-removebg-preview.png" alt="" width="40%">', dashName : 'Virtual Cards'},
]

console.log(dashboardArray);
const dashList = () =>{
    for ( const myDash of dashboardArray){
        contentList.innerHTML += `<div class="center">
        <div class="Ta">
        ${myDash.image}
        </div>
        <div class="paragraph">
        ${myDash.dashName}
        </div>
        </div>
        
        `
    }

}
dashList();

const myFirst = () =>{

    for ( const mFirst of first){
        box.innerHTML += `<div class="">
        <div class="box1 ">
        ${mFirst.img} 
        <div class="text">
        ${mFirst.name}
        </div>

        </div>
        </div>
        `
    }
}

const login = () =>{
    modal.classList.toggle('visible');
   //console.log('successful');
                                                                                                                
}

    

    let toggle =0;
const toggleCancel = () =>{
    if ( toggle == 1){
        modal.classList.toggle('invisible');

    }
    else{
        modal.classList.toggle('visible');
    }    
// alert('Please delete me')
}


let dash = 0;
const myDashBoard =()=>{
    
    if ( dash == 1 ){
        modal.classList.toggle('invisible')
        
    }
    else{
        dashBoard.className = 'visible '
    }
console.log('login successful');
 
}
//myDashBoard()

const loginHandler = () =>{
    myDashBoard();
    toggleCancel();
   // alert('successful Login')
}

const cardList = ()=>{
myCard.classList.toggle('changeme')
}




//firstLayer.addEventListener('click', shows)
finger.addEventListener('click', login );
cancel.addEventListener('click', toggleCancel);
logme.addEventListener('click', loginHandler);
menu.addEventListener('click', menuHandler);
cards.addEventListener('click', cardList)

myFirst();