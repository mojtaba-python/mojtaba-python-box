const box = document.getElementById("box");
const divBox = document.getElementById("div_box");

const box2 = document.getElementById("box2");
const divBox2 = document.getElementById("div_box2");

const box3 = document.getElementById("box3");
const divBox3 = document.getElementById("div_box3");

function mouseDown() {
    box.style.cssText="transform: translateY(-30px);  background-color: #6ea7f8; color:#145e14";
    divBox.style.zIndex="1";
}

function mouseBlur() {
    box.style.cssText="transform: translateY(0); background-color: #5998ee; color:#f0f8ff";
}

function mouseDown2() {
    box2.style.cssText="transform: translateY(-30px);  background-color: #6ea7f8; color:#145e14";
    divBox2.style.zIndex="1";
}

function mouseBlur2() {
    box2.style.cssText="transform: translateY(0); background-color: #5998ee; color:#f0f8ff";
}

function mouseDown3() {
    box3.style.cssText="transform: translateY(-30px);background-color: #6ea7f8; color:#145e14";
    divBox3.style.zIndex="1";
}

function mouseBlur3() {
    box3.style.cssText="transform: translateY(0); background-color: #5998ee;color:#f0f8ff";
}