let target = document.getElementById('inputText');
// console.log(target);

target.addEventListener('blur', function (){
  let span = document.getElementById('outputText');
//  console.log(target);
  span.innerText = target.value;
  span.classList.remove("hidden");
});
