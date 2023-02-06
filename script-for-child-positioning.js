const rootBoundaryElemRect = document
  .querySelector(".root  .boundary")
  .getBoundingClientRect();

const childElementProperties = {
  width: 250,
  height: 250,
};

document.addEventListener("click", function (e) {
  if (e.target.id === "parent-element") {
    childElem.classList.add("show");

    const parentRect = e.target.getBoundingClientRect();
    const childElem = document.querySelector("#child-element");

    let childLeftPosition = parentRect.left - childElementProperties.width;

    let condition = true;
    let letLeftSideOkayForChild = false;
    while (condition) {
      break;

      if (childLeftPosition > rootBoundaryElemRect.left) {
      }
    }

    const computedChildTopPosition = parentRect.top + "px";
    const computedChildLeftPosition = parentRect.left + "px";

    childElem.style.top = computedChildTopPosition;
    childElem.style.left = computedChildLeftPosition;
  }
});
