const body = document.querySelector("body");
const grids = document.querySelector(".grids");

for(let i=0;i<16;++i){
    for(let j=0;j<16;++j){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grids.appendChild(grid);
    }
}
