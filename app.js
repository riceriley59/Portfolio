//opening animation and preloader code
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll(".logo");
const start = document.getElementById('start-text');
const loader = document.getElementById('preloader');
const scrollind = document.querySelector('.scroll-down');
const header = document.getElementById('showcase');
const showcaselist = document.querySelector('.showcaselist');

window.addEventListener('DOMContentLoaded', ()=>{
	setTimeout(()=>{
		loader.style.display = "none";
		scrollind.classList.add('active');
		showcaselist.classList.add('active');
	}, 400);

	setTimeout(()=>{
		start.classList.add('active');
	}, 900)

	setTimeout(()=>{
		start.classList.remove('active');
		start.classList.add('appear');
	}, 1000)

	logoSpan.forEach((span, idx)=>{
		setTimeout(()=>{
			span.classList.add('active');
		}, (idx + 1) * 300)
	})
});

//parallax code
const moon = document.getElementById('moon');
const stars = document.getElementById('stars');
const mountainsf = document.getElementById('mountains_front');
const mountainsb = document.getElementById('mountains_behind');
const scroll = document.getElementById('scroll-text');

const middle = document.querySelector('.sun');
const aboutlist = document.querySelector('.aboutlist');

let middleX = window.innerWidth / 1.3;
let middleY = window.innerHeight * 1.25;

const attr1 = document.querySelector('.mercury');
const attr2 = document.querySelector('.venus');
const attr3 = document.querySelector('.mars');
const attr4 = document.querySelector('.earth');

const faders = document.querySelectorAll('.planet');
const sliders = document.querySelectorAll('.slide-in');

let theta1 = 0;
let theta2 = 1.57;
let theta3 = 3.14;
let theta4 = 4.71;

let speed = 0.05;
let radius = 100;

setInterval(()=>{
	//laptop dimensions
	if(window.innerWidth > 1200 && window.innerWidth < 1600){
		middleX = window.innerWidth / 1.8;
		middleY = window.innerHeight * 1.95;
	}
	//desktop dimensions
	else if(window.innerWidth > 1600){
		middleX = window.innerWidth / 1.3;
		middleY = window.innerHeight * 1.6;
	}
	
	middle.style.left = middleX + 'px';
	middle.style.top = middleY + 'px';

	if(window.innerWidth > 1200){
		attr1.style.left = (Math.cos(theta1) * radius + middleX) + 'px';
		attr1.style.top = (Math.sin(theta1) * radius + middleY) + 'px';

		attr2.style.left = (Math.cos(theta2) * radius + middleX) + 'px';
		attr2.style.top = (Math.sin(theta2) * radius + middleY) + 'px';

		attr3.style.left = (Math.cos(theta3) * radius + middleX) + 'px';
		attr3.style.top = (Math.sin(theta3) * radius + middleY) + 'px';

		attr4.style.left = (Math.cos(theta4) * radius + middleX) + 'px';
		attr4.style.top = (Math.sin(theta4) * radius + middleY) + 'px';
	}
	else{
		attr1.classList.remove('appear');
		attr2.classList.remove('appear');
		attr3.classList.remove('appear');
		attr4.classList.remove('appear');
	}
}, 10);

ready = false;

const options = {
	threshold: 0,
	rootMargin: "0px 0px -125px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll)=>{
	entries.forEach((entry, idx) => {
		if(!entry.isIntersecting){
			return;
		} else {
			setTimeout(()=>{
				entry.target.classList.add('appear');
			}, (idx + 1) * 200)
			setTimeout(()=>{ready = true;}, 2000);
			appearOnScroll.unobserve(entry.target);
		}
	})
}, options);

faders.forEach(fader =>{
	appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
	appearOnScroll.observe(slider);
});

const home = document.querySelector('.select1');
const about = document.querySelector('.select2');
const work = document.querySelector('.select3');
const contact = document.querySelector('.select4');


window.addEventListener('scroll', ()=>{
	let value = window.scrollY;

	//sticky and responsive nav-bar
	if(window.innerWidth > 1600){
		header.classList.toggle("sticky", value > 900);

		if(value < 600){
			home.classList.add("active");
			about.classList.remove('active');
			work.classList.remove('active');
			contact.classList.remove('active');
		}
		else if(value > 600 && value < 1500){
			home.classList.remove("active");
			about.classList.add('active');
			work.classList.remove('active');
			contact.classList.remove('active');
		}
		else if(value < 3000 && value > 1500){
			home.classList.remove("active");
			about.classList.remove('active');
			work.classList.add('active');
			contact.classList.remove('active');
		}
		else if(value > 3000){
			home.classList.remove("active");
			about.classList.remove('active');
			work.classList.remove('active');
			contact.classList.add('active');
		}
	}
	else if(window.innerWidth > 1200 && window.innerWidth < 1600){
		header.classList.toggle("sticky", value > 650);

		if(value < 500){
			home.classList.add("active");
			about.classList.remove('active');
			work.classList.remove('active');
			contact.classList.remove('active');
		}
		else if(value > 500 && value < 1400){
			home.classList.remove("active");
			about.classList.add('active');
			work.classList.remove('active');
			contact.classList.remove('active');
		}
		else if(value < 2900 && value > 1400){
			home.classList.remove("active");
			about.classList.remove('active');
			work.classList.add('active');
			contact.classList.remove('active');
		}
		else if(value > 2900){
			home.classList.remove("active");
			about.classList.remove('active');
			work.classList.remove('active');
			contact.classList.add('active');
		}
	}
	else if(window.innerWidth > 768 && window.innerWidth < 1024){
		header.classList.toggle("sticky", value > 1000);

		if(value < 1000){
			home.classList.add("active");
			about.classList.remove('active');
			work.classList.remove('active');
			contact.classList.remove('active');
		}
		else if(value > 1000 && value < 1800){
			home.classList.remove("active");
			about.classList.add('active');
			work.classList.remove('active');
			contact.classList.remove('active');
		}
		else if(value < 3900 && value > 1800){
			home.classList.remove("active");
			about.classList.remove('active');
			work.classList.add('active');
			contact.classList.remove('active');
		}
		else if(value > 3900){
			home.classList.remove("active");
			about.classList.remove('active');
			work.classList.remove('active');
			contact.classList.add('active');
		}
	}
	if(window.innerWidth < 640){
		header.classList.toggle("sticky", value > 700);

		if(value < 700){
			home.classList.add("active");
			about.classList.remove('active');
			work.classList.remove('active');
			contact.classList.remove('active');
		}
		else if(value > 700 && value < 1800){
			home.classList.remove("active");
			about.classList.add('active');
			work.classList.remove('active');
			contact.classList.remove('active');
		}
		else if(value < 3900 && value > 1800){
			home.classList.remove("active");
			about.classList.remove('active');
			work.classList.add('active');
			contact.classList.remove('active');
		}
		else if(value > 3900){
			home.classList.remove("active");
			about.classList.remove('active');
			work.classList.remove('active');
			contact.classList.add('active');
		}
	}

	//other
	scrollind.classList.add('fade');
	stars.style.transform = 'translateX(' + (value * 0.25) + 'px)';
	moon.style.transform = 'translateY(' + (value * 1.05) + 'px)';
	mountainsb.style.transform = 'translateY('+ (value * 0.5) + 'px)';
	mountainsf.style.transform = 'translateY(' + (value * 0.0) + 'px)';
	start.style.transform = 'translateX(' + -(value * 5) + 'px)';
	scroll.style.transform = 'translateX(' + -(value * 5) + 'px)';

	if(ready && window.innerWidth > 1200){
		theta1 += speed;
		attr1.style.left = (Math.cos(theta1) * radius + middleX) + 'px';
		attr1.style.top = (Math.sin(theta1) * radius + middleY) + 'px';

		theta2 += speed;
		attr2.style.left = (Math.cos(theta2) * radius + middleX) + 'px';
		attr2.style.top = (Math.sin(theta2) * radius + middleY) + 'px';

		theta3 += speed;
		attr3.style.left = (Math.cos(theta3) * radius + middleX) + 'px';
		attr3.style.top = (Math.sin(theta3) * radius + middleY) + 'px';

		theta4 += speed;
		attr4.style.left = (Math.cos(theta4) * radius + middleX) + 'px';
		attr4.style.top = (Math.sin(theta4) * radius + middleY) + 'px';

		attr1.classList.add('appear');
		attr2.classList.add('appear');
		attr3.classList.add('appear');
		attr4.classList.add('appear');
	}
});

const burger = document.querySelector('.burger');
const showcaselinks = document.querySelectorAll('.showcaselist li');

burger.addEventListener('click', ()=>{
	showcaselist.classList.toggle('nav-active');


	showcaselinks.forEach((link, index) => {
		link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index/7) + 's';
	});

	burger.classList.toggle('toggle');

	if(window.scrollY < 1000 && window.innerWidth > 768 && window.innerWidth < 1024){
		header.classList.toggle("sticky");
	}
	else if(window.scrollY < 700 && window.innerWidth < 640){
		header.classList.toggle("sticky");
	}
});

showcaselinks.forEach((link) =>{
	link.addEventListener('click', ()=>{
		showcaselist.classList.toggle('nav-active');
		burger.classList.remove('toggle');
	});
});


let reset = true;

//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".status span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#7597de";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
		statusTxt.innerText = "Your Message Failed To Send";
		reset = false;
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
	  if(reset){
      	statusTxt.innerText = "Your Message Was Sent!";
	  }
		form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}

