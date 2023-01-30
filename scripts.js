const body = document.querySelector("body");
const grids = document.querySelector(".grids");
const btn = document.querySelector(".btn");

function generateGrids(n){
    while(grids.lastChild){
        grids.removeChild(grids.lastChild);
    }
    for(let i=0;i<n;++i){
        for(let j=0;j<n;++j){
            let grid = document.createElement("div");
            grid.classList.add("grid");
            grids.appendChild(grid);
        }
    }

    let gridElements = document.getElementsByClassName("grid");
    let percent = 100/n;
    for(let i=0; i<gridElements.length; ++i){
        gridElements[i].style.width = `${percent}%`;
    }

    /*Add event listener to these grids */
    const gridNodeList = document.querySelectorAll(".grid");
    gridNodeList.forEach(grid => grid.addEventListener('mouseover', addHoverClass));
}

function addHoverClass(e){
    this.classList.add('hovered');
}

function buttonClick(e){
    let numberSquarePerSide = parseInt(prompt("Enter no of squares per side"));
    if(isNaN(numberSquarePerSide) || numberSquarePerSide<1 || numberSquarePerSide>100){
        alert("Please enter a number between 1 and 100");
    }else{
        generateGrids(numberSquarePerSide);
    }
}



btn.addEventListener('click', buttonClick);
