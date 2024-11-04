arr = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown","white", "gray", "cyan", "magenta", "lime", "navy", "teal", "maroon", "olive", "violet", "indigo", "gold", "silver", "coral", "salmon", "peach", "mint", "lavender", "khaki", "tan", "chocolate","beige"];


document.addEventListener("DOMContentLoaded", function() {
    button= document.getElementById("change-color-btn");
    colorBox = document.getElementById("color-box");

    function getRandomColor() {
        couleur=Math.floor(Math.random() * arr.length);
        return couleur ;
    }

    function changeColor() {
        couleur=getRandomColor();
        colorBox.style.backgroundColor = arr[couleur];
        button.style.backgroundColor = arr[couleur];
        button.style.color="black";
    }

    button.addEventListener("click", function() {
        changeColor()
    });


});
