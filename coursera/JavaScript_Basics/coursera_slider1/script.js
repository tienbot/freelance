(function(){
    "use strict";

    const myImages=['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    let currentImage = 0;

    document.getElementById('next').addEventListener('click', nextPhoto);
    function nextPhoto(){
        currentImage++
        if (currentImage>myImages.length-1){currentImage = 0;}
        document.getElementById('myimage').src = myImages[currentImage];
    }

    document.getElementById('previous').addEventListener('click', previousPhoto);
    function previousPhoto(){
        currentImage--
        if (currentImage < 0){currentImage = myImages.length-1;}
        document.getElementById('myimage').src = myImages[currentImage];
    }

})();