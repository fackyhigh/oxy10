var parent = document.querySelector('.slider');

///SwapSlider Bellow
var currentSlide = 0;
var slider = parent.querySelector('.slider__cover');
var items = slider.querySelectorAll('.slider__item');
var width = parent.offsetWidth;
var controls = parent.querySelector('.slider__controls');
var cloneOfFirst = slider.firstElementChild.cloneNode(true);
slider.appendChild(cloneOfFirst);
var items = slider.querySelectorAll('.slider__item');
var length = items.length;

for (var i = 0; i < length; i++){
		items[i].style.transform = 'translateX('+(width*i)+'px)'; //Первичная расстановка
}
slider.style.transform = 'translateX(0px)';
for (var i = 0; i < length-1; i++){
		var element = document.createElement('li'); //Создание переключателей
		element.classList.add('switcher');
		controls.appendChild(element);	
}

var switcherCollection = controls.querySelectorAll('.switcher'); //Активируем первый переключатель по-дефолту


switcherCollection[0].classList.add('switcher__active'); //Поиск активного переключателя, сравнивая индекс переключателя и текущий слайд
var switcherActivator = function(){
			for (var i = 0; i < length-1; i++){
			if (currentSlide === length-1){
				switcherCollection[0].classList.add('switcher__active');
				switcherCollection[length-2].classList.remove('switcher__active');
			}
			else if (currentSlide === i){
				switcherCollection[i].classList.add('switcher__active');
			}
			else{
				switcherCollection[i].classList.remove('switcher__active');
			}
		}
	};


var swapSlides = function(){ //двигает слайды влево на 1 пока не дойдет до последнего элемента
		slider.style.transition = "1s ease";
		currentSlide >= length-1 ? false : currentSlide++;
		width = parent.offsetWidth;
		slider.style.transform = 'translateX('+width*(-currentSlide)+'px)';
		jump();
		switcherActivator();
};

var jump = function () {
	slider.addEventListener('transitionend', function(){
		currentSlide === length-1 ? currentSlide = 0 : currentSlide; //сбарсывает текущий слайд на 0 при достижении последнего  элемента
		slider.style.transition = "none";
		slider.style.transform = 'translateX('+width*(-currentSlide)+'px)';
	}) 
}

var addControlClickHandler = function(controlItem,clickIndex){ // обработчик клика не пареключатели
			controlItem.addEventListener('click',function(){
				currentSlide = clickIndex-1;
				swapSlides();
				switcherActivator();
			});
}

for (var i = 0; i<length-1;i++){
	addControlClickHandler(switcherCollection[i],i)
}

//window.setInterval(swapSlides,3000);
window.addEventListener('resize',function(){
	width = parent.offsetWidth;
	slider.style.transform = 'translateX('+width*(-currentSlide)+'px)';
	for (var i = 0; i < length; i++){
		items[i].style.transform = 'translateX('+(width*i)+'px)'; //Первичная расстановка
}
	console.log(width);
});

//https://codesandbox.io/s/625xzmv21k?codemirror=1&fontsize=14