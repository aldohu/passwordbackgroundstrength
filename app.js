const password = document.querySelector('#password');
const image = document.querySelector('#image');
const computedStyle = window.getComputedStyle(image);
let passwordLength = password.value.length;
console.log(computedStyle);

console.log(blur);
password.addEventListener('input', (e) => {
	let blur = computedStyle.getPropertyValue('filter');
	blur = +blur.replace(/[^0-9]/g, '');
	console.log(blur);
	passwordLength = e.target.value.length;
	image.style.filter = `blur(${blur - passwordLength}px)`;
});
