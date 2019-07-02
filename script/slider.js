function Slider(settings) {
	const parent = document.querySelector(".slider");
	const slider = parent.querySelector(".slider-cover");
	const dots = parent.querySelector(".slider-controls");
	const cloneOfFirst = slider.firstElementChild.cloneNode(true);
	const cloneOfLast = slider.lastElementChild.cloneNode(true);
	const items = slider.querySelectorAll(".slider-item");
	const length = items.length;
	let switcherCollection, currentSlide;
	let isTransitioning = false;
	let { speed, timingFunction, infinite } = settings;
	let icons = [
		"img/icons/left-arrow.svg",
		"img/icons/right-arrow.svg",
	];

	const init = settings => {
	  	//Appending clonesf
	  	slider.appendChild(cloneOfFirst);
	  	slider.insertBefore(cloneOfLast, slider.firstElementChild);
	  	//Setting up first slide
	  	currentSlide = 1;
	  	slider.style.transform = `translateX(-${100 * currentSlide}%)`;
		if (settings.arrows) {
			icons.forEach((iconPath, index) => {
				let element = document.createElement("img");
				element.setAttribute("src",iconPath);
				element.classList.add(`arrow-${index}`)
				parent.appendChild(element);
			})

		};	
	  //Creating control switchers
		if (settings.nav === true) {
			for (let i = 0; i < length; i++) {
			  let element = document.createElement("li");
			  element.classList.add("switcher");
			  element.addEventListener("click", () => this.goTo(i + 1));
			  dots.appendChild(element);
			}
			//Making active first switcher by default
			switcherCollection = dots.querySelectorAll(".switcher");
			switcherCollection[0].classList.add("switcher-active");
			}
		};
  
	this.goTo = targetSlide => {
		if (!isTransitioning) {
			if (targetSlide === length + 1) {
		  		if (infinite) {
					currentSlide = 1;
					translateToThenJump(targetSlide);
		  		}
			} 	
			else if (targetSlide === 0) {
				  	if (infinite) {
						currentSlide = length;
						translateToThenJump(0);
				  	}
			} 	
			else {
				  	currentSlide = targetSlide;
				  	translateTo(currentSlide);
					}
			
				activateSwitchers();
	  	}
	};
  
	// next&previous
	this.next = () => this.goTo(currentSlide + 1);
	this.previous = () => this.goTo(currentSlide - 1);
  
	const translateTo = index => {
	  slider.style.transition = `transform ${speed}s ${timingFunction}`;
	  slider.style.transform = `translateX(-${100 * index}%)`;
	};
  
	const translateToThenJump = targetSlide => {
	  const jump = () => {
		slider.style.transition = "none";
		slider.style.transform = `translateX(-${100 * currentSlide}%)`;
		slider.removeEventListener("transitionend", jump);
		isTransitioning = false;
	  };
  
	  isTransitioning = true;
	  slider.addEventListener("transitionend", jump);
	  slider.style.transition = `transform ${speed}s ${timingFunction}`;
	  slider.style.transform = `translateX(-${100 * targetSlide}%)`;
	};
  
	//highlights current switcher
	const activateSwitchers = () => {
	  switcherCollection.forEach((item, index) => {
		item.classList.toggle("switcher-active", index === currentSlide - 1);
	  });
	};
  
	init(settings);
  }
  