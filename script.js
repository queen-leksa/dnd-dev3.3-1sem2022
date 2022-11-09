const items = document.querySelectorAll(".item");
const block = document.querySelector(".container");
let dragEl = null;

items.forEach(item => {
    item.draggable = true;
    item.addEventListener("dragstart", e => {
        dragEl = e.target;
        e.target.classList.add("isDragging");
    });
    item.addEventListener("dragend", e => {
        e.target.classList.remove("isDragging");
        dragEl = null;
    });
    item.addEventListener("dragover", e => {
        e.preventDefault();
        e.target.classList.add("dragOver");
    })
    item.addEventListener("dragleave", e => {
        e.preventDefault();
        e.target.classList.remove("dragOver");
    })
});
console.log(block);

block.addEventListener("dragover", e => {
    e.stopPropagation();
    e.preventDefault();
    // e.dataTransfer.dropEffect = "move";
    block.style.backgroundColor = "indigo";
})
block.addEventListener("dragleave", e => {
    e.stopPropagation();
    e.preventDefault();
    block.style = null;
});
block.addEventListener("drop", function(e) {
    e.preventDefault();
    e.stopPropagation();
    // let dropTag = e.dataTransfer.getData("text/html");
    block.appendChild(dragEl);
});