function Slider() {
	const parent = document.querySelector(".slider");
	const slider = parent.querySelector(".slider-cover");
	const controls = parent.querySelector(".slider-controls");
	const cloneOfFirst = slider.firstElementChild.cloneNode(true);
	const cloneOfLast = slider.lastElementChild.cloneNode(true);
	const items = slider.querySelectorAll(".slider-item");
	const length = items.length;
	let switcherCollection;
	let width = parent.offsetWidth;
	let currentSlide = 1;
  
	const init = () => {
	  //Appending clonesf
	  slider.appendChild(cloneOfFirst);
	  slider.insertBefore(cloneOfLast, slider.firstElementChild);
  
	  //Setting up first slide
	  slider.style.transform = `translateX(-${100 * currentSlide}%)`;
	  //Creating control switchers
	  for (let i = 0; i < length; i++) {
		var element = document.createElement("li");
		element.classList.add("switcher");
		controls.appendChild(element);
	  }
	  //Making active first switcher by default
	  switcherCollection = controls.querySelectorAll(".switcher");
	  switcherCollection[0].classList.add("switcher-active");
	};
  
	init();
  
	this.goTo = () => {
	  slider.style.transition = "transform 1s ease";
	  if (currentSlide === length) {
		jump();
		slider.style.transform = `translateX(-${100 * (currentSlide + 1)}%)`;
		currentSlide = 1;
		switcherActivator();
	  } else {
		currentSlide++;
		slider.style.transform = `translateX(-${100 * currentSlide}%)`;
		switcherActivator();
	  }
	};
  
	const jump = () => {
	  slider.addEventListener("transitionend", function handler() {
		slider.style.transition = "none";
		slider.style.transform = `translateX(-${100 * currentSlide}%)`;
		console.log(`Current slide is ${currentSlide}; Last item is ${length}`);
		slider.removeEventListener("transitionend", handler);
	  });
	};
	const switcherActivator = () => {
	  switcherCollection.forEach((item, index) => {
		item.classList.toggle("switcher-active", index === currentSlide - 1);
	  });
	  /*for (let i = 0; i < length; i++) {
		  switch (currentSlide) {
			case length + 1:
			  switcherCollection[0].classList.add("switcher-active");
			  switcherCollection[length - 1].classList.remove("switcher-active");
			  break;
			case i + 1:
			  switcherCollection[i].classList.add("switcher-active");
			  break;
			default:
			  switcherCollection[i].classList.remove("switcher-active");
		  }
		  
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
	};
  }
  
  var carousel = new Slider();
  document.body.onclick = carousel.goTo;
  