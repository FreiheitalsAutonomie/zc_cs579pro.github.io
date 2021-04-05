let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//alert('hello!');
//alert 是弹出警告

//JavaScript 把页面的标题改成了 “Hello world!” 。
//首先用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中。
//这与 CSS 选择器的用法非常相像：若要对某个元素进行操作，首先得选择它。
//之后，把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!” 。

//document.querySelector('html').onclick = function() {
//    alert('别戳我，我怕疼。');
//}

let myImage = document.querySelector('img');

///这句话挺关键的，获取某个标签的属性

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '22.png') {
      myImage.setAttribute('src', '11.png');
    } else {
      myImage.setAttribute('src', '22.png');
    }
}



/*
let icecream = 'Chocolate';
if (icecream==='Chocolate'){
    alert('我最喜欢巧克力冰激凌了');
}else{
    alert('但是我还是最喜欢巧克力')
}
*/
