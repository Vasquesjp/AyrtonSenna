function hideLoader() {
    $('#loader').hide();
}
setTimeout(hideLoader, 2 * 1000);

function homeBtn() {
    document.getElementById("homeContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("galleryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";
}

function curiosityBtn() {
    document.getElementById("curiosityContent").style.display = "block";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galleryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";
}

function galleryBtn() {
    document.getElementById("galleryContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";
}

function quizBtn() {
    document.getElementById("quizContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galleryContent").style.display = "none";
    document.getElementById("awardsContent").style.display = "none";
}

function awardsBtn() {
    document.getElementById("awardsContent").style.display = "block";
    document.getElementById("curiosityContent").style.display = "none";
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("galleryContent").style.display = "none";
    document.getElementById("quizContent").style.display = "none";
}

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrowLeft");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem =0;
        }

        if (currentItem <0) {
            currentItem = maxItems -1;
        }

        items.forEach (item => item.classList.remove('currentItem'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        items[currentItem].classList.add("currentItem");
    });
});