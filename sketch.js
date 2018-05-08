//Array to hold mitosis cells
var cells = [];

function setup() {
    createCanvas(600, 400);
    //start the program with 4 cells
    cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());
}//setup

function draw() {
    background(51);
    //iterate through cells array and move and show cells
    for (var i = 0; i < cells.length; i++){
        cells[i].move();
        cells[i].show();
    }
}//draw

function mousePressed(){
    //If cells are clicked call the mitosis function and break them down further and add them to the array
    for (var i = cells.length-1; i >= 0; i--){
        if (cells[i].clicked(mouseX, mouseY)){
            cells.push(cells[i].mitosis());
            cells.push(cells[i].mitosis());
            cells.splice(i,1);
        }
    }
}//mousePressed

