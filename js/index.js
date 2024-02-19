






// Buy Ticket
function goToBuyTickets() {
    window.scroll({
        top: 1665,
        behavior: 'smooth'
    })
}
// Buy Ticket Done

const seatBtns = document.getElementsByClassName('sites')

let seatDecrimant = 39;
let selectedSeat = 1;
let perSeat = 0;
for (let seatBtn of seatBtns) {
    seatBtn.addEventListener('click', function () {
        // 
        setTextElementValueById('selected-number', seatDecrimant)
        seatDecrimant = seatDecrimant - 1;
        setTextElementValueById('clickToUpdet', selectedSeat)
        selectedSeat = selectedSeat + 1;
        // end
        seatBtn.classList.add('bg-green-400')
        const textNumber = seatBtn.innerText
        const conteiner = document.getElementById('conteiner-set')
        const newTag = document.createElement('h1');
        newTag.innerText = textNumber;
        conteiner.appendChild(newTag)
        const conteinerClass = document. getElementById('conteinerClass')
        const newYorClass = document.createElement('h1')
        newYorClass.innerText = 'Economy'
        conteinerClass.appendChild(newYorClass)
        const conteinerPrice = document.getElementById('conteinerPrice')
        const setPrice = document.createElement('h1')
        setPrice.innerText = 550;
        conteinerPrice.appendChild(setPrice);
        // 
        const curentSubPrice = getTextElementValueById('totalPrice')
        const totalPrice = curentSubPrice + 550;
        setTextElementValueById('totalPrice', totalPrice)
        // d-price
        const subPrice = getTextElementValueById('d-price')
        const decountedPrice = subPrice + 550;
        setTextElementValueById('d-price', decountedPrice)
        if (selectedSeat >= 5) {
            alert('Buy only 4 Tikits')
        }
    })
}
function nextNewPage() {
    document.getElementById('nextBtn').addEventListener('click', function () {
        const element = document.getElementById('all');
      element.classList.add('hidden');
        
    })
} 
