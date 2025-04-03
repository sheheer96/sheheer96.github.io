document.getElementById("submit").addEventListener("click",function(){

    let weight= document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi  = weight/(height/100)**2;
    localStorage.setItem("bmiResult", bmi);

    window.location.href="new.html";

});
