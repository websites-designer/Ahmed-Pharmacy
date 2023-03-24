
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('shown', entry.isIntersecting))
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))



const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('shown1', entry.isIntersecting))
})
const hiddenElements1 = document.querySelectorAll('.hidden1')
hiddenElements1.forEach((el) => observer1.observe(el))






function ischecked() {
    if (document.getElementById("chock").checked) {

        document.getElementById("message").style.top = "15px";
        document.getElementById("message").style.left = "142px";
        document.getElementById("message").style.position = "fixed";
        document.getElementById("message").style.transition = "0s";
        document.getElementById("overover").style.display = "block";
        document.getElementById("overover").style.animation = "fadeInLeft 0.3s";
    }
    else {
        document.getElementById("message").style.position = "absolute";
        document.getElementById("overover").style.display = "none";
        document.getElementById("message").style.transition = "0s";
        document.getElementById("message").style.top = "20px";
        document.getElementById("message").style.left = "30px";
    }
}

        





document.getElementById('scor').onclick = function () {
    document.getElementById('overover').style.display = "none";
    document.getElementById('message').style.position = "absolute";
    document.getElementById("message").style.top = "20px";
    document.getElementById("message").style.left = "30px";
    document.getElementById("chock").checked = false;
}
document.getElementById('video1').onclick = function () {
    document.getElementById('video123').style.display = "block";
    document.getElementById('pausevideo').play();



}
function video2() {
  document.getElementById('video123').style.display = "none";
  document.getElementById('pausevideo').pause();

}

document.getElementById('scor1').onclick = function () {
    document.getElementById('overover').style.display = "none";
    document.getElementById('message').style.position = "absolute";
    document.getElementById("message").style.top = "20px";
    document.getElementById("message").style.left = "30px";
    document.getElementById("chock").checked = false;
}
document.getElementById('scor2').onclick = function () {
    document.getElementById('overover').style.display = "none";
    document.getElementById('message').style.position = "absolute";
    document.getElementById("message").style.top = "20px";
    document.getElementById("message").style.left = "30px";
    document.getElementById("chock").checked = false;
}
document.getElementById('scor3').onclick = function () {
    document.getElementById('overover').style.display = "none";
    document.getElementById('message').style.position = "absolute";
    document.getElementById("message").style.top = "20px";
    document.getElementById("message").style.left = "30px";
    document.getElementById("chock").checked = false;
}
document.getElementById('scor100').onclick = function () {
  document.getElementById('overover').style.display = "none";
  document.getElementById('message').style.position = "absolute";
  document.getElementById("message").style.top = "20px";
  document.getElementById("message").style.left = "30px";
  document.getElementById("chock").checked = false;
}
document.getElementById('scor4').onclick = function () {
    document.getElementById('overover').style.display = "none";
    document.getElementById('message').style.position = "absolute";
    document.getElementById("message").style.top = "20px";
    document.getElementById("message").style.left = "30px";
    document.getElementById("chock").checked = false;
}
document.getElementById('scor5').onclick = function () {
    document.getElementById('overover').style.display = "none";
    document.getElementById('message').style.position = "absolute";
    document.getElementById("message").style.top = "20px";
    document.getElementById("message").style.left = "30px";
    document.getElementById("chock").checked = false;
}


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});



const selected1 = document.querySelector(".selected1");
const optionsContainer1 = document.querySelector(".options-container1");

const optionsList1 = document.querySelectorAll(".option1");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active1");
});

optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active1");
  });
});


