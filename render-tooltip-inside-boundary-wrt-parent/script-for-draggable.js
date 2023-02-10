let parentElemOffsetX;
let parentElemOffsetY;

on_drag_end = function (ev) {
  ev.target.remove();

  const boundaryElment = document.querySelector("#boundary");
  const boundaryElmentRect = boundaryElment.getBoundingClientRect();

  const newParentElem = document.createElement("div");
  newParentElem.id = "parent-element";
  newParentElem.classList.add("parent-element");
  newParentElem.style.top =
    ev.clientY - boundaryElmentRect.top - parentElemOffsetY + "px";
  newParentElem.style.left =
    ev.clientX - boundaryElmentRect.left - parentElemOffsetX + "px";
  boundaryElment.append(newParentElem);
  newParentElem.draggable = true;
  newParentElem.ondragend = on_drag_end;
};

on_drag_start = function (ev) {
  const rect = ev.target.getBoundingClientRect();

  parentElemOffsetX = ev.clientX - rect.x;
  parentElemOffsetY = ev.clientY - rect.y;
};

dragover_handler = function (ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
};
