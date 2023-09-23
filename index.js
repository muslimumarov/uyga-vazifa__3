eltitle = document.querySelector('.title');
let elspan1 = document.querySelector('.span')
let sayohat = +prompt('Summani kiriting');
let samalyot = 500;
let mehmonxona = 250;
let muzey = 120;
let umumiy = 500 * 12300 + 250 * 12500 + 120 * 13500;
console.log(umumiy);
if (sayohat >= umumiy) {
elspan1.textContent = 'oq yo\'l Alisher'
}else {
elspan1.textContent = 'ozgina sabr qiling Alisher aka'
}
