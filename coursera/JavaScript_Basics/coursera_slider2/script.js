(function(){
    "use strict";
    let curentImage = 0;
    const myPhotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    function swapImage(){
        const newsSlide = document.createElement('img');
        newsSlide.src = `slides/${myPhotos[curentImage]}`;
        newsSlide.className = 'fadeinimg';
        container.appendChild(newsSlide);

        if(container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }

    nextBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        curentImage++;
        if (curentImage > myPhotos.length-1){curentImage = 0;}
        swapImage();

    });

    prevBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        curentImage--;
        if (curentImage < 0){curentImage = myPhotos.length-1;}
        swapImage();
    });
})();