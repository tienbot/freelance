$(document).ready(function() {
  $('select').niceSelect();
});

//Block search button if city not selected
const newsFilter = document.querySelector('.news-filter');
const newsOtherFilter = document.querySelector('.news_page_title .filter');


if(newsFilter || newsOtherFilter){
    setTimeout(() => {
        let selectInput, searchBtn;
        
        if(newsFilter){
            selectInput = newsFilter.querySelector('.nice-select');
            searchBtn = newsFilter.querySelector('button.search');
        } else {
            selectInput = newsOtherFilter.querySelector('.nice-select');
            searchBtn = newsOtherFilter.querySelector('button.search');
        }
        
        if(!selectInput){
            let selectInput = newsOtherFilter.querySelector('.nice-select');
            let searchBtn = newsOtherFilter.querySelector('button.search');
        }
        
        const firstOption = selectInput.querySelector('.list > li');
        const allLis = selectInput.querySelectorAll('.list > li');
        
        const checkOption = () => {
            if(firstOption.classList.contains('selected')){
                searchBtn.disabled = true;
            } else {
                searchBtn.disabled = false;
            }
            
            setTimeout(() => {
                searchBtn.disabled = false;
            }, 1000);
        };
        
        searchBtn.addEventListener('click', checkOption);
    }, 500);
}


// Block scroll when modal 
const burgerBtn = document.querySelector('[aria-controls="collapseHeader"]');
const collapseHeader = document.querySelector('#collapseHeader');

burgerBtn.addEventListener('click', () => {
    setTimeout(() => {
        if(collapseHeader.classList.contains('show')){
            document.body.classList.add('prevent-body-scroll');
        } else {
            document.body.classList.remove('prevent-body-scroll');
        }
    }, 400);
});



// swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    // centeredSlides: true,
    spaceBetween: 20,
    slidesOffsetBefore: 15,
    // slidesOffsetAfter: 15,
    slidesOffsetAfter: 250,
    breakpoints: {
        990: {
            slidesPerView: 3,
            slidesOffsetBefore: 240,
            slidesOffsetAfter: 840
        }
    }
});
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     slidesPerView: 1,
//     centeredSlides: true,
//     spaceBetween: 20,
//     grabCursor: true,
//     breakpoints: {
//         400: {
//         slidesPerView: 2,
//         spaceBetween: 10,
//         centeredSlides: true,
//         },
//         640: {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         },
//         1025: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//         },
//         1650: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//         },
//         1900: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//         },
//     }
// });

const swiperBooksParams = {
    slidesPerView: 2,
    centeredSlides: false,
    grabCursor: true,
    slidesOffsetBefore: 38,
    slidesOffsetAfter: 110,
    spaceBetween: 110,
    breakpoints: {
        400: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 3,
        },
        925: {
            slidesPerView: 5,
        },
        1200:{
            slidesPerView: 6,    
        },
        1500: {
            slidesPerView: 7,
        }
    }
}

const swiper_book = new Swiper('.swiper_book', swiperBooksParams);

const swiper_special = new Swiper('.swiper_special', swiperBooksParams);
//{
    // slidesPerView: 1,
    // centeredSlides: true,
    // grabCursor: true,
    // slidesOffsetBefore: 50,
    // breakpoints: {
    //     400: {
    //         slidesPerView: 2,
    //         slidesOffsetBefore: -30,
    //     },
    //     640: {
    //         slidesPerView: 3,
    //         slidesOffsetBefore: -60,
    //     },
    //     925: {
    //         slidesPerView: 5,
    //         slidesOffsetBefore: -80,
    //     },
    //     1200:{
    //         slidesPerView: 6,    
    //         slidesOffsetBefore: -160,
    //     },
    //     1500: {
    //         slidesPerView: 7,
    //         slidesOffsetBefore: -100,
    //     },
    //     1600: {
    //         slidesPerView: 7,
    //         slidesOffsetBefore: -240,
    //     }
    // }
//}
//);


// tooltip (выпадашка при hover-е)
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
function bookClick() {
    console.log('click');
  }
  tooltipTriggerList.forEach((img) => {
    img.addEventListener('click', bookClick);
  });

// Эффект при наведении на черную кнопку
const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	let addAnimation = false;
	// Elements that contain the "FLASH" class, add a listener to remove
	// animation-class when the animation ends
	if (element.classList[1] == "FLASH") {
		element.addEventListener("animationend", e => {
			element.classList.remove(ANIMATEDCLASSNAME);
		});
		addAnimation = true;
	}

	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

		// Add an animation-class to animate via CSS.
		if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});

//добавить эффект к кнопке
function effect_btn(){
    document.querySelector('.wpcfs-search-form').querySelector('.wpcfs-input-wrapper.wpcfs-input-submit>input').remove();
    
    function addBtn(){
        const div = document.querySelector('.wpcfs-input-submit');
        const btn = document.createElement('button');
        btn.classList.add('btn', 'btn-dark', 'HOVER', 'search');
        const span = document.createElement('span');
//         span.style = "top: 60px; left:60px;";
        const text = document.createElement('text');
        text.textContent = 'Поиск';
        div.appendChild(btn);
        btn.appendChild(span);
        btn.appendChild(text);
    };
    addBtn();
};
effect_btn();

document.getElementById('preset-2/1').querySelector('.wpcfs-input-wrapper.wpcfs-input-submit>button>text').textContent = 'Показать';