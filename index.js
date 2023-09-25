eltitle = document.querySelector('.title');
let elspan1 = document.querySelector('.span')
let sayohat = +prompt('Summani kiriting');
let USD = 12200;
let EURO = 13500;
let samalyot = 500;
let mehmonxona = 250;
let muzey = 120;
let umumiy = samalyot * USD + mehmonxona * USD + muzey * EURO;
if (sayohat >= umumiy) {
elspan1.textContent = 'oq yo\'l Alisher'
}else if (sayohat <= 0)   {
elspan1.textContent = 'tog\'ri summa kiriting!'
} else {
  elspan1.textContent = 'ozgina sabr qiling Alisher aka'
  };
