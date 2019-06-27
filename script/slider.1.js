function Slider() {
	const parent = document.querySelector(".slider");
	const slider = parent.querySelector(".slider-cover");
	const controls = parent.querySelector(".slider-controls");
	const cloneOfFirst = slider.firstElementChild.cloneNode(true);
	const cloneOfLast = slider.lastElementChild.cloneNode(true);
	let items, length, switcherCollection;
	let width = parent.offsetWidth;
	let currentSlide = 1;
  
	const init = () => {
	  //Appending clonesf
	  slider.appendChild(cloneOfFirst);
	  slider.insertBefore(cloneOfLast, slider.firstElementChild);
	  items = slider.querySelectorAll(".slider-item");
	  length = items.length;
	  //Setting up first slide
	  slider.style.transform = `translateX(-${100 * currentSlide}%)`;
	  //Creating control switchers
	  for (let i = 0; i < length - 2; i++) {
		var element = document.createElement("li");
		element.classList.add("switcher");
		controls.appendChild(element);
	  }
	  //Making active first switcher by default
	  switcherCollection = controls.querySelectorAll(".switcher");
	  switcherCollection[0].classList.add("switcher-active");
	};
	
	init();
  
	this.swapSlides = () => {
	  //двигает слайды влево на 1 пока не дойдет до последнего элемента
	  slider.style.transition = "transform 1s ease";
	  currentSlide >= length - 1 ? false : currentSlide++;
	  slider.style.transform = `translateX(-${100 * currentSlide}%)`;
	  jump();
	  switcherActivator();
	};
  
	const jump = ()=>{
	  slider.addEventListener("transitionend", function() {
		currentSlide === length - 1 ? (currentSlide = 1) : currentSlide; //сбарсывает текущий слайд на 0 при достижении последнего  элемента
		slider.style.transition = "none";
		slider.style.transform = `translateX(-${100 * currentSlide}%)`;
	  });
	};
	const switcherActivator = () => {
		for (let i = 0; i < length-1; i++){
			switch(currentSlide) {
				case length - 1:
					switcherCollection[0].classList.add('switcher-active');
					switcherCollection[length-2].classList.remove('switcher-active');
					break;
				case i + 1:
						switcherCollection[i].classList.add('switcher-active');
						break;
				default:
						switcherCollection[i].classList.remove('switcher-active');	
			}
			/*
		if (currentSlide === length-1){
			switcherCollection[0].classList.add('switcher-active');
			switcherCollection[length-2].classList.remove('switcher-active');
		}
		else if (currentSlide === i){
			switcherCollection[i].classList.add('switcher-active');
		}
		else{
			switcherCollection[i].classList.remove('switcher-active');
		}*/
	}
};
}
  
  var carousel = new Slider();