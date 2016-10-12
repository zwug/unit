var input = document.querySelector('#code');
var btn = document.querySelector('#btn');

input.onchange = checkCode;
btn.onclick = checkCode;

function checkCode() {
  var code = input.value;
  if (code == 63759) {
    var box = document.querySelector('.box');
    box.classList.remove('closed');
    box.classList.add('open');
    var hidden = document.querySelector('.img-container');
    hidden.classList.remove('hidden');
  } else {
    input.classList.add('error');
    setTimeout(function () {
      input.classList.remove('error');
    }, 1000);
  }
}
