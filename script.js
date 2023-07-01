/* eslint-disable require-jsdoc */
const viewplace = document.querySelector('.viewplace');
const pic1 = new Image();
pic1.src='./images/p1.jpg';
const pic2 = new Image();
pic2.src = './images/p2.jpg';
const pic3 = new Image();
pic3.src = './images/p3.jpg';
const pic4 = new Image();
pic4.src = './images/p4.jpg';
const pic5 = new Image();
pic5.src = './images/p5.jpg';
const indices = document.querySelector('.indices');
let prevind = document.querySelector('.img1');
prevind.classList.toggle('active');


const images = [pic1, pic2, pic3, pic4, pic5];
const circles = indices.children;
let index = 0%images.length;
let timer1 = null;
viewplace.appendChild(images[index]);

const forward = ()=> {
  viewplace.removeChild(images[index]);
  prevind = circles[index];
  index = (index+1)%images.length;
  viewplace.appendChild(images[index]);
  prevind.classList.toggle('active');
  circles[index].classList.toggle('active');
};

function autoForward() {
  timer1 = setInterval(forward, 4000);
};
autoForward();
indices.addEventListener('click', (e) => {
  if (e.target.matches('.img')) {
    const oldIndex = index;
    index = parseInt(e.target.classList[2]);
    e.target.classList.toggle('active');
    circles[oldIndex].classList.toggle('active');
    viewplace.removeChild(images[oldIndex]);
    viewplace.appendChild(images[index]);
    console.log(oldIndex);
    console.log(index);
    prevind = e.target;
    clearTimeout(timer1);
    autoForward();
  }
});



const nextBtn = document.querySelector('.forward');
nextBtn.addEventListener('click', ()=> {
  forward();
  clearTimeout(timer1);
  autoForward();
});

const prevBtn = document.querySelector('.back');
prevBtn.addEventListener('click', ()=> {
  viewplace.removeChild(images[index]);
  prevind = circles[index];
  index = (index-1)%images.length;
  if (index<0) index = 4;
  viewplace.appendChild(images[index]);
  prevind.classList.toggle('active');
  circles[index].classList.toggle('active');
  clearInterval(timer1);
  autoForward();
});


