// common function
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value)
}



// noakhali

const noakhaliBtn = document.getElementById('noakhaliBtn')
noakhaliBtn.addEventListener('click', function () {
    const noakhaliDonatedAmount = parseFloat(document.getElementById('noakhaliAmount').innerText)
    // const noakhaliInput = parseFloat(document.getElementById('noakhaliInput').value)
    const noakhaliInput = getInputValueById('noakhaliInput')
    const inputNoakhali = document.getElementById('noakhaliInput')
    const wallet = parseFloat(document.getElementById('balance').innerText)
    const balance = document.getElementById('balance')

    // validation

    if (noakhaliInput> wallet) {
        document.getElementById('logic-error1').classList.remove('hidden')
        return
        
    }
    else{
        document.getElementById('logic-error1').classList.add('hidden')


    }

    if (noakhaliInput <= 0 || isNaN(noakhaliInput)) {
        document.getElementById('noakhali-error').classList.remove('hidden')
        return

    }
    else {
        document.getElementById('noakhali-error').classList.add('hidden')
        // alert('Congrats! You have donated Successfully!')

        // modal
        const modal = document.getElementById('my_modal');
        const modalAmount = document.getElementById('modalNoakhali')
        modalAmount.innerText = noakhaliInput
        modal.showModal();

    }
    
    



    const newBalance = wallet - noakhaliInput;
    balance.innerText = newBalance



    const totalDonated = noakhaliDonatedAmount + noakhaliInput;


    const finalNoakhali = document.getElementById('noakhaliAmount')

    finalNoakhali.innerText = totalDonated;
    inputNoakhali.value = ''

    // history
    const historytab = document.createElement('div')
    historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", 'mb-8')
    historytab.innerHTML = `
    <p class= "text-xl lg:text-2xl font-bold mb-4">${noakhaliInput} Taka is Donated for Flood Relief in Noakhali, Bangladesh</p>
    <p class="font-light text-sm md:text-md" >Date: ${new Date()}
    `
    const historyContainer = document.getElementById('historyTab')
    historyContainer.insertBefore(historytab, historyContainer.firstChild)





})


// lakshmipur
const laxBtn = document.getElementById('laxBtn')
laxBtn.addEventListener('click', function () {
    const laxDonatedAmount = parseFloat(document.getElementById('laxAmount').innerText)
    // const laxInput = parseFloat(document.getElementById('laxInput').value)
    const laxInput = getInputValueById('laxInput')
    const inputlax = document.getElementById('laxInput')
    const wallet = parseFloat(document.getElementById('balance').innerText)
    const balance = document.getElementById('balance')

    // validation

    if (laxInput > wallet) {
        document.getElementById('logic-error2').classList.remove('hidden')
        return
        
    }
    else{
        document.getElementById('logic-error2').classList.add('hidden')


    }

    if (laxInput <= 0 || isNaN(laxInput) ) {
        document.getElementById('lax-error').classList.remove('hidden')
        return

    }
    else {
        document.getElementById('lax-error').classList.add('hidden')
        // modal
        const modal = document.getElementById('my_modal2');
        const modalAmount = document.getElementById('modallax')
        modalAmount.innerText = laxInput
        modal.showModal();
    }

    const newBalance = wallet - laxInput;
    balance.innerText = newBalance



    const totalDonated = laxDonatedAmount + laxInput;


    const finallax = document.getElementById('laxAmount')

    finallax.innerText = totalDonated;
    inputlax.value = ''

    // history
    const historytab = document.createElement('div')
    historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", "mb-8")
    historytab.innerHTML = `
    <p class= "text-xl lg:text-2xl font-bold mb-4">${laxInput} Taka is Donated for Flood Relief in Lakshmipur,Bangladesh</p>
    <p class="font-light text-sm md:text-md" >Date: ${new Date()}
    `
    const historyContainer = document.getElementById('historyTab')
    historyContainer.insertBefore(historytab, historyContainer.firstChild)



})

// quota
const quotaBtn = document.getElementById('quotaBtn')
quotaBtn.addEventListener('click', function () {
    const quotaDonatedAmount = parseFloat(document.getElementById('quotaAmount').innerText)
    // const quotaInput = parseFloat(document.getElementById('quotaInput').value)
    const quotaInput = getInputValueById('quotaInput')

    const inputquota = document.getElementById('quotaInput')
    const wallet = parseFloat(document.getElementById('balance').innerText)
    const balance = document.getElementById('balance')

    // validation

    if (quotaInput > wallet) {
        document.getElementById('logic-error3').classList.remove('hidden')
        return
        
    }
    else{
        document.getElementById('logic-error3').classList.add('hidden')


    }

    if (quotaInput <= 0 || isNaN(quotaInput) ) {
        document.getElementById('quota-error').classList.remove('hidden')
        return

    }
    else {
        document.getElementById('quota-error').classList.add('hidden')
        // modal
        const modal = document.getElementById('my_modal3');
        const modalAmount = document.getElementById('modalquota')
        modalAmount.innerText = quotaInput
        modal.showModal();
    }

    const newBalance = wallet - quotaInput;
    balance.innerText = newBalance



    const totalDonated = quotaDonatedAmount + quotaInput;


    const finalquota = document.getElementById('quotaAmount')

    finalquota.innerText = totalDonated;
    inputquota.value = ''


    // history
    const historytab = document.createElement('div')
    historytab.classList.add('rounded-2xl', 'border', 'border-gray-200', "p-8", "mb-8")
    historytab.innerHTML = `
    <p class= "w-full text-xl lg:text-2xl font-bold mb-4">${quotaInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class="w-full font-light text-sm md:text-md" >Date: ${new Date()}
    `
    const historyContainer = document.getElementById('historyTab')
    historyContainer.insertBefore(historytab, historyContainer.firstChild)




})

// history Tab
const historyMenu = document.getElementById('historyMenu')
const donationMenu = document.getElementById('donationMenu')
historyMenu.addEventListener('click', function () {
    historyMenu.classList.add('bg-[#B4F461]')
    historyMenu.classList.remove('bg-white')
    donationMenu.classList.remove('bg-[#B4F461]')
    donationMenu.classList.add('bg-white')

    document.getElementById('donationSection').classList.add('hidden')
    document.getElementById('historySection').classList.remove('hidden')



})

//  dontation tab

donationMenu.addEventListener('click', function () {
    donationMenu.classList.add('bg-[#B4F461]')
    donationMenu.classList.remove('bg-white')
    historyMenu.classList.remove('bg-[#B4F461]')
    historyMenu.classList.add('bg-white')

    document.getElementById('historySection').classList.add('hidden')
    document.getElementById('donationSection').classList.remove('hidden')



})

// blog btn

document.getElementById('blogBtn').addEventListener('click', function(event){
    
    window.location.href = './blog.html'
})




// live Validation
// noakhali
document.getElementById('noakhaliInput').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('noakhaliInput').value)

    if (inputValue <= 0 || isNaN(inputValue)) {
        document.getElementById('noakhali-error').classList.remove('hidden')
        return

    }
    else {
        document.getElementById('noakhali-error').classList.add('hidden')}

})

// lakshmipur
document.getElementById('laxInput').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('laxInput').value)

    if (inputValue <= 0 || isNaN(inputValue)) {
        document.getElementById('lax-error').classList.remove('hidden')
        return

    }
    else {
        document.getElementById('lax-error').classList.add('hidden')}

})
document.getElementById('quotaInput').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('quotaInput').value)

    if (inputValue <= 0 || isNaN(inputValue)) {
        document.getElementById('quota-error').classList.remove('hidden')
        return

    }
    else {
        document.getElementById('quota-error').classList.add('hidden')}

})