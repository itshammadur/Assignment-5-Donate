


let totalMoney =parseFloat( document.getElementById('total-amount').innerHTML)
// let donatesNow = document.getElementsByClassName('donates-now')
let modalClick =document.getElementById('modall')



function switchHomePage(){
    window.location.href ="home.html"
}
function switchBlogPage(){
    window.location.href ="index.html"
}

function historyItem(id){
    const inputNumber=getInputValueById(id)
    const historyItems=document.createElement("div");
    historyItems.className ="  bg-white mx-8 mt-8 rounded-md border-2 border-gray-500 w-full p-12";
    historyItems.innerHTML =`
        <p class = "text-2xl text-slate-900 font-bold ">${inputNumber.toFixed(2)}Taka is Donate for Flood at Noakhali</p>

    <p class = "text-xs text-gray-500">${new Date().toLocaleDateString('en-US',
        {
            year:'numeric',
            month:'long',
            day:'numeric',
            hour:'2-digit',
            minute:'2-digit',
            second:'2-digit',
            hour12:true,
            timeZone: 'asia/dhaka'
        }
    )}</p>

    `
    const historyContainer =document.getElementById('history-list');
    historyContainer.insertBefore(historyItems, historyContainer.firstChild)
}

// for 1st section 
function handleDonation(inputFieldId,donationAmount){
    
    
    const inputValue = getInputValueById(inputFieldId)
    const addMoney=parseFloat(inputValue)
    if(!getAlert(addMoney,totalMoney)){
        return;
    }
    
    totalMoney -= addMoney;
   
     document.getElementById('total-amount').innerText = totalMoney.toFixed(2)
     const addDonateMoney= getInnerTextById(donationAmount);
     const newAddDonateMoney = addDonateMoney + addMoney;
     document.getElementById(donationAmount).innerText =newAddDonateMoney.toFixed(2)
     historyItem(inputFieldId);
    
}


document.getElementById('donate-money').addEventListener('click',function (){
    handleDonation('input-field-number','add-donate');
})
document.getElementById('donate-money-two').addEventListener('click',function (){
    handleDonation('input-field-number-two','add-donate-two');
})
document.getElementById('donate-money-third').addEventListener('click',function (){
    handleDonation('input-field-number-third','add-donate-third');
})

donateTab = document.getElementById('donate-btn')
sectionDonate= document.getElementsByClassName('section')
 historyTab = document.getElementById('history-btn')


 historyTab.addEventListener('click',function(){
    for(let i=0; i < sectionDonate.length; i++)
    sectionDonate[i].classList.add('hidden')
    historyTab.classList.add(  'font-semibold',  'backdrop-blur-sm', 'text-black', 'bg-lime-400',)
    const donateBtn =document.getElementById('donate-btn')
        donateBtn.classList.remove('bg-lime-400',  'font-semibold',  'backdrop-blur-sm', 'text-black', )
        const historyList =document.getElementById('history-list')
        historyList.classList.remove('hidden')

    
})

donateTab.addEventListener('click',function(){
    for(let i=0; i < sectionDonate.length; i++)
        sectionDonate[i].classList.remove('hidden')
    donateTab.classList.add(  'font-semibold',  'backdrop-blur-sm', 'text-black', 'bg-lime-400',)
    historyTab.classList.remove('bg-lime-400',  'font-semibold',  'backdrop-blur-sm', 'text-black',)
    
})


