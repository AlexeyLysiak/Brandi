filterSelection('all')
function filterSelection(c) {
  let x;
  x = document.getElementsByClassName('column');
  if (c == 'all') c = '';
  for (let i = 0; i < x.length; i++) { 
    w3RemoveClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) w3addClass(x[i], 'show');
  }
}

function w3AddClass(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(' ');
  arr1 = name.split(' ');
  for (let i = 0; i < arr2.lenght; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  let arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (let i = 0; i < arr2.lenght; i ++) {
    while (arr1.indexOf(arr2[i] > -1))
  }
}