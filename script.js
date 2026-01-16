// NAVBAR TOGGLE
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}

// FILTER MENU
function filterMenu(category) {
  let items = document.querySelectorAll('.item');
  if(category === 'all') category = '';
  items.forEach(item => {
    item.style.display = item.classList.contains(category) || category === '' ? "block" : "none";
  });
}

// UPDATE TOTAL PRICE
function updateTotal(input) {
  let item = input.closest('.item');
  let price = parseFloat(item.querySelector('.price').innerText);
  let total = price * input.value;
  item.querySelector('.total').innerText = total;
}

// WHATSAPP BUY BUTTON (PRODUCT ORDER)
function buyWhatsApp(btn) {
  let item = btn.closest('.item');

  let name = item.querySelector('h3').innerText;
  let qty = item.querySelector('input[type="number"]').value;
  let price = item.querySelector('.price').innerText;
  let total = item.querySelector('.total').innerText;

  // GET SELECTED DATES
  let datesInput = item.querySelector('.date-input');
  let dates = datesInput.value ? datesInput.value : "Not selected";

  let msg =
    `🛒 *New Tiffin Order* %0A` +
    `🍽 Product: ${name} %0A` +
    `🔢 Quantity: ${qty} %0A` +
    `📅 Days: ${dates} %0A` +
    `💰 Price (each): Rs ${price} %0A` +
    `💵 Total: Rs ${total}`;

  btn.href = `https://wa.me/923172156101?text=${msg}`;
}

// MULTI-DATE CALENDAR
function openCalendar(input) {
  let calendar = input.nextElementSibling;
  calendar.classList.toggle("hidden");

  if(calendar.innerHTML === "") {
    let today = new Date();
    for(let i=0;i<30;i++){
      let date = new Date();
      date.setDate(today.getDate()+i);

      let day = document.createElement("div");
      day.innerText = date.getDate() + "/" + (date.getMonth()+1);

      day.onclick = function(){
        day.classList.toggle("selected");
        updateSelectedDates(calendar,input);
      }

      calendar.appendChild(day);
    }
  }
}

function updateSelectedDates(calendar,input){
  let selected = [];
  calendar.querySelectorAll(".selected").forEach(d=>{
    selected.push(d.innerText);
  });
  input.value = selected.join(", ");
}

// FORM WHATSAPP ORDER
function buyFormWhatsApp() {
  let name = document.querySelector('input[placeholder="Your Name"]').value;
  let email = document.querySelector('input[placeholder="Your Email"]').value;
  let phone = document.querySelector('input[placeholder="Your Phone"]').value;
  let date = document.querySelector('input[placeholder="Date"]').value;
  let time = document.querySelector('input[placeholder="Time"]').value;
  let people = document.querySelector('input[placeholder="# Of People"]').value;
  let message = document.querySelector('textarea').value;

  let msg =
    `📋 *Manual Order Request* %0A` +
    `👤 Name: ${name} %0A` +
    `📧 Email: ${email} %0A` +
    `📞 Phone: ${phone} %0A` +
    `📅 Date: ${date} %0A` +
    `⏰ Time: ${time} %0A` +
    `👥 Persons: ${people} %0A` +
    `📝 Message: ${message}`;

  window.open(`https://wa.me/923172156101?text=${msg}`, '_blank');
}

