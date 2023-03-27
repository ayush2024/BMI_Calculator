
const btn = document.getElementById('calculate');

btn.addEventListener('click', function () {

    let Height = document.querySelector('#height').value;
    let Weight = document.querySelector('#weight').value;

    if (Height == '' || Weight == '') {
        alert("Please fill all the inputfields !!");
        return;
    }
    Height = Height / 100;

    let BMI = (Weight / (Height * Height));
    BMI = BMI.toFixed(2);

    document.querySelector('.value').innerHTML = BMI;

    let status = '';

    if (BMI < 18.5) status = 'Underweight';
    else if (BMI >= 18.5 && BMI < 25) status = "Healthy";
    else if (BMI >= 25 && BMI < 30) status = "Overweight";
    else if(BMI >=30) status = "Obese";

    document.querySelector('.comment').innerHTML = `Comment: 
                You are <span id="comment">${status}</span>`
});


