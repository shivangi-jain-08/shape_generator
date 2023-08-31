var button = document.getElementById("button")
var numberInsideShape = 1
var lastShapeNumber = 0


button.onclick=()=>{

    //input value
    var n = document.getElementById("number").value

    //options selected
    var circle = document.getElementById("circle").checked

    var square = document.getElementById("square").checked

    var rectangle = document.getElementById("rectangle").checked

    //total shapes count
    var totalShapesCount = Number(lastShapeNumber) + Number(n)

    //creating box where all shapes are
    var box = document.getElementById("box")

    for(let i = numberInsideShape; i<=totalShapesCount; i++){
    
    //creating a div
    var shape = document.createElement("div")

    //defining the number inside shape
    shape.innerHTML = numberInsideShape

    //increment by 1
    numberInsideShape++

    //adding class to the div created
    if (square == true) {
        shape.classList.add("square");
    } else if(circle==true) {
        shape.classList.add("circle");
    } else if(rectangle==true) {
        shape.classList.add("rectangle")
    }

    //inserting the div created in the box div
    box.append(shape)

    //take out last number from div
    lastShapeNumber = box.lastElementChild.innerHTML
    }
}