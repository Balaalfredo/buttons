// var n = "one";

// // String  "text"
// console.log("text " + n);
// console.log(`text ${n}`);

// var a = 10;
// // Number   20,  20.0 +,-,*,/,%, Math.pow(2,2), Math.floor(5.3)
// console.log(Math.pow(2, 3));
// console.log(Math.floor(10 / 3));
// console.log(10 / 3);
// console.log(10 % 3);
// // Boolean  true or flalse
// console.log(true);
// console.log(false);
// // Array    ["text",20,false,[],{}]
// var arr = ["text", 20, false, [], { name: "html", age: 20 }];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[4].age);
// // Object   {name:"html",age:20}
// var obj = { name: "html", age: 20 };
// console.log(obj["name"]);
// console.log(obj.age);

// let i = '0';
// let g = '10';

// if (i !== g) { console.log('true') }
// else { console.log('falsee') }



// let arr = [3, 4, 5, 6, 7, 7, 8, 8, 'jj', 77]

// for (i = 1; i < arr.length; i++) { console.log(i) }
// for (i in arr) { console.log(i) }


// for (i; i < g; i++) { console.log(i) }


// for (let i = 1; i <= 20; i++) { console.log(i) }




// const box = document.getElementById("box");
// const main = document.getElementById("main");
// const close = document.getElementById("close");

// function heading() { box.style.width = '210px'; box.style.height = '130px'; box.style.backgroundColor = 'red'; box.style.transition = '2s'; }

// main.onclick = heading;

// function head() { box.style.width = '0'; box.style.height = '0'; box.style.backgroundColor = 'none'; box.style.transition = '2s'; }

// close.onclick = head;

const openn = document.getElementById('openn');
const close = document.getElementById('close');

const cancel = document.getElementById('cancel')
const cancell = document.getElementById('cancell')
const cancelll = document.getElementById('cancelll')


const cancellll = document.getElementById('cancellll')

openn.onclick = () => { main.style.transform = 'scale(1)'; openn.style.boxShadow = '3px 3px 3px 3px black inset'; close.style.boxShadow = '3px 3px 3px 3px black' }




close.onclick = () => { main.style.transform = 'scaleX(0)'; close.style.boxShadow = '3px 3px 3px 3px black inset'; openn.style.boxShadow = '3px 3px 3px 3px black'; }

cancel.onclick = () => { box1.style.transform = 'scale(0)'; box1.style.transition = '1.5s'; }

cancell.onclick = () => { box2.style.transform = 'scale(0)'; box2.style.transition = '1.5s'; }
cancelll.onclick = () => { box3.style.transform = 'scale(0)'; box3.style.transition = '1.5s'; }
cancellll.onclick = () => { box4.style.transform = 'scale(0)'; box4.style.transition = '1.5s'; }