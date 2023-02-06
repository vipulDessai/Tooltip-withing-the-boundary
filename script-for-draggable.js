function onDragEnd(e) {
  return;

  const rect = e.target.getBoundingClientRect();

  const offsetX = e.clientX - rect.x;
  const offsetY = e.clientY - rect.y;

  e.target.remove();

  const newParentElem = document.createElement("div");
  newParentElem.id = "parent-element";
  newParentElem.classList.add("parent-element");
  newParentElem.style.top = offsetY + "px";
  newParentElem.style.left = offsetX + "px";
  document.querySelector("#boundary").append(newParentElem);
  newParentElem.draggable = true;
  newParentElem.ondragend = onDragEnd;
}

// TODO: fix the draggable code
let offsetX;
let offsetY;

onDragStart = function (ev) {
  const rect = ev.target.getBoundingClientRect();

  offsetX = ev.clientX - rect.x;
  offsetY = ev.clientY - rect.y;
};

drop_handler = function (ev) {
  ev.preventDefault();

  const left = parseInt(id2.style.left);
  const top = parseInt(id2.style.top);

  id1.style.position = "absolute";
  id1.style.left = ev.clientX - left - offsetX + "px";
  id1.style.top = ev.clientY - top - offsetY + "px";
  id2.appendChild(document.getElementById("id1"));
};

dragover_handler = function (ev) {
  return;

  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
};
