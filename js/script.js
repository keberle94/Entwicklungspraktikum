//changeColorToTrue

function chColorToTrue(elementID) {
    document.getElementById(elementID).style.backgroundColor = "#01ff80";
}

//changeColorToFalse

function chColorToFalse(elementID) {
    document.getElementById(elementID).style.backgroundColor = "#ff4837";
}

//testForValueInTolerance

function testForValueInTolerance(givenValue, maxValue, minValue, changeColorID, hideElementID) {
    if (givenValue <= minValue || givenValue > maxValue) {
        chColorToFalse(changeColorID);
        changeFailureResponse(hideElementID, false);
    }
    else {
        chColorToTrue(changeColorID);
        changeFailureResponse(hideElementID, true);
    }
}

function changeFailureResponse(elementID, hide) {
    var diffElement = document.getElementById(elementID);
    if (hide == true)
        diffElement.style.display = 'none';
    else
        diffElement.style.display = 'block';
}