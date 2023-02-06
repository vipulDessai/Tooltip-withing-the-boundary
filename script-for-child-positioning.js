const rootBoundaryElemRect = document
  .querySelector(".root  .boundary")
  .getBoundingClientRect();

const childElementProperties = {
  width: 250,
  height: 250,
};

document.addEventListener("click", function (e) {
  if (e.target.id === "parent-element") {
    const parentRect = e.target.getBoundingClientRect();
    const childElem = document.querySelector("#child-element");
    childElem.classList.add("show");

    if (
      parentRect.left - childElementProperties.width >=
      rootBoundaryElemRect.left
    ) {
      childElem.style.left =
        parentRect.left - childElementProperties.width + "px";
    } else {
      childElem.style.left = parentRect.left + parentRect.width + "px";
    }

    const parentElemVerticalMidPoint = parentRect.top + parentRect.height / 2;
    let highestChildTopPosition =
      parentElemVerticalMidPoint - childElementProperties.height / 2;
    while (
      highestChildTopPosition <= parentElemVerticalMidPoint &&
      highestChildTopPosition <= rootBoundaryElemRect.top
    ) {
      highestChildTopPosition += 10;
    }

    while (
      highestChildTopPosition + childElementProperties.height >
      rootBoundaryElemRect.top + rootBoundaryElemRect.height
    ) {
      highestChildTopPosition -= 10;
    }

    childElem.style.top = highestChildTopPosition + "px";
  }
});
