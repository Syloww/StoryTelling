const audio1 = new Audio('./audio/audio1.mp3');
const audio2 = new Audio('./audio/audio2.mp3');
const audio3 = new Audio('./audio/audio3.mp3');
const audio4 = new Audio('./audio/audio4.mp3');
const audio5 = new Audio('./audio/audio5.mp3');
const audio6 = new Audio('./audio/audio6.mp3');
const audio7 = new Audio('./audio/audio7.mp3');
const audio8 = new Audio('./audio/audio8.mp3');
const audio9 = new Audio('./audio/audio9.mp3');
const audio10 = new Audio('./audio/audio10.mp3');
const audio11 = new Audio('./audio/audio11.mp3');

document.querySelector("#audio1").addEventListener("click", toggleSon1);
document.querySelector("#audio2").addEventListener("click", toggleSon2);
document.querySelector("#audio3").addEventListener("click", toggleSon3);
document.querySelector("#audio4").addEventListener("click", toggleSon4);
document.querySelector("#audio5").addEventListener("click", toggleSon5);
document.querySelector("#audio6").addEventListener("click", toggleSon6);
document.querySelector("#audio7").addEventListener("click", toggleSon7);
document.querySelector("#audio8").addEventListener("click", toggleSon8);
document.querySelector("#audio9").addEventListener("click", toggleSon9);
document.querySelector("#audio10").addEventListener("click", toggleSon10);
document.querySelector("#audio11").addEventListener("click", toggleSon11);

function toggleSon1() {
    console.log("son 1 play");
    if (audio1.paused) {
        audio1.play();
    } else {
        audio1.pause();
        audio1.currentTime = 0;
    }
}

function toggleSon2() {
    console.log("son 2 play");
    if (audio2.paused) {
        audio2.currentTime = 3;
        audio2.play();
    } else {
        audio2.pause();
        audio2.currentTime = 0;
    }
}

function toggleSon3() {
    console.log("son 3 play");
    if (audio3.paused) {
        audio3.currentTime = 5;
        audio3.play();
    } else {
        audio3.pause();
        audio3.currentTime = 0;
    }
}

function toggleSon4() {
    console.log("son 4 play");
    if (audio4.paused) {
        audio4.currentTime = 8;
        audio4.play();
    } else {
        audio4.pause();
        audio4.currentTime = 0;
    }
}

function toggleSon5() {
    console.log("son 5 play");
    if (audio5.paused) {
        audio5.currentTime = 6;
        audio5.play();
    } else {
        audio5.pause();
        audio5.currentTime = 0;
    }
}

function toggleSon6() {
    console.log("son 6 play");
    if (audio6.paused) {
        audio6.play();
    } else {
        audio6.pause();
        audio6.currentTime = 0;
    }
}

function toggleSon7() {
    console.log("son 7 play");
    if (audio7.paused) {
        audio7.play();
    } else {
        audio7.pause();
        audio7.currentTime = 0;
    }
}

function toggleSon8() {
    console.log("son 8 play");
    if (audio8.paused) {
        audio8.play();
    } else {
        audio8.pause();
        audio8.currentTime = 0;
    }
}

function toggleSon9() {
    console.log("son 9 play");
    if (audio9.paused) {
        audio9.play();
    } else {
        audio9.pause();
        audio9.currentTime = 0;
    }
}

function toggleSon10() {
    console.log("son 10 play");
    if (audio10.paused) {
        audio10.play();
    } else {
        audio10.pause();
        audio10.currentTime = 0;
    }
}

function toggleSon11() {
    console.log("son 11 play");
    if (audio11.paused) {
        audio11.play();
    } else {
        audio11.pause();
        audio11.currentTime = 0;
    }
}