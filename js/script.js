//changeColorToTrue

function chColorToTrue(elementID) {
    document.getElementById(elementID).style.backgroundColor = "#01ff80";
}

//changeColorToFalse

function chColorToFalse(elementID) {
    document.getElementById(elementID).style.backgroundColor = "#ff4837";
}

//testForValueInTolerance

function testForValueInTolerance(givenValue, maxValue, minValue, elementID) {
    if (givenValue <= minValue || givenValue > maxValue)
        chColorToFalse(elementID);
    else
        chColorToTrue(elementID);
}