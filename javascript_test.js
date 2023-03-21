// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const contentP = document.createElement('p');
contentP.classList.add('contentP');
contentP.textContent="Hey I'm red!";
contentP.style.color = "red";

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent="I'm a blue h3!";
h3.style.color = "blue";

const div1 = document.createElement('div')
div1.classList.add('div1')
div1.style.border = 'solid black'
div1.style.backgroundColor = 'pink'

const p2 = document.createElement('p')
p2.classList.add('p2')
p2.textContent = "ME TOO!"
const h1 = document.createElement('h1')
h1.classList.add('h1')
h1.textContent = "I'm in a div"

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

container.appendChild(content);
container.appendChild(contentP);
container.appendChild(h3)
container.appendChild(div1)
div1.appendChild(h1)
div1.appendChild(p2)