var angle = 0;

function userInput() {
    angle = prompt("Enter an angle between 0 and 180:");
    angleIdentification(angle);
}

function angleIdentification(angle) {
    if (angle >= 0 && angle < 90) {
        alert("Acute Angle");
    } else if (angle == 90) {
        alert("Right Angle");
    } else if (angle > 90 && angle < 180) {
        alert("Obtuse Angle");
    } else if (angle == 180) {
        alert("Straight Angle");
    }
}