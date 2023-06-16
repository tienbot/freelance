(function(){
    'use srict';

    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(evt){
        const key = evt.code; //значение кнопки клавиатуры
        if (key === 'KeyK'){
            convertType = 'kilometers';
            heading.innerHTML = 'Kilometers to Miles Converter';
            intro.innerHTML = 'Type in a number of killometers and click the button to convert the distance to miles.';
        } else if(key === 'KeyM'){
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers Converter';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to killometers.';
        }
    });

    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);

        if(distance){
            if(convertType == 'miles'){
                const conversion = (distance * 1.609344).toFixed(3); //toFixed(3) - округление до трех знаков
                answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
            } else {
                const conversion = (distance * 0.621371192).toFixed(3); //toFixed(3) - округление до трех знаков
                answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`;
            }
            
        } else {
            answerDiv.innerHTML = '<h2>Please provide a number!</h2>';
        }
    });
})();