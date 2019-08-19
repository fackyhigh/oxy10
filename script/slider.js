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
	let { speed = 1, timingFunction = "ease", infinite = true, arrows = false, nav = true, autoplay = true, delay=5000} = settings;
	/*let icons = [
		"img/icons/left-arrow.svg",
		"img/icons/right-arrow.svg",
	];*/

	const init = () => {
	  	//Appending clonesf
	  	slider.appendChild(cloneOfFirst);
	  	slider.insertBefore(cloneOfLast, slider.firstElementChild);
	  	//Setting up first slide
	  	currentSlide = 1;
	  	slider.style.transform = `translateX(-${100 * currentSlide}%)`;
		//Creating navigation arrows
		if (arrows) {
			/*icons.forEach((iconPath, index) => {
				let element = document.createElement("object");
				element.setAttribute("data",iconPath);
				element.setAttribute("type","image/svg+xml");
				element.classList.add("arrow", `arrow-${index}`);

				parent.appendChild(element);
			})*/
			for (let i = 0; i <= 1 ; i++){
				let element = document.createElement("span");
				element.classList.add("arrows", `arrows-${i < 1 ? 'left' : 'right'}-arrow`);
				element.addEventListener("click", () => {
					i < 1 ? this.previous() : this.next();
				});
				parent.appendChild(element);
			}
		};	
	  //Creating control switchers
		if (nav === true) {
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
			//Setting autoplay
			if (autoplay === true){
			window.setInterval(this.next, delay);
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
  