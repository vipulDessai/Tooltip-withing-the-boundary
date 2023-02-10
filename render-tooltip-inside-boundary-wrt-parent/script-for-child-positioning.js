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

    let suitableHorizontalPositionForChild =
      parentRect.left - childElementProperties.width;
    while (suitableHorizontalPositionForChild < rootBoundaryElemRect.left) {
      suitableHorizontalPositionForChild += 10;
    }

    let arrowForChildElement = "towards-left";
    if (
      suitableHorizontalPositionForChild + childElementProperties.width >
      parentRect.left + parentRect.width / 2
    ) {
      suitableHorizontalPositionForChild = parentRect.left + parentRect.width;
      arrowForChildElement = "towards-right";
    }

    childElem.style.left = suitableHorizontalPositionForChild + "px";

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
    childElem.classList.add(arrowForChildElement);
  }
});
