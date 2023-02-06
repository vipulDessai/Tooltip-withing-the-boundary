document.addEventListener('click', function (e) {
    if (e.target.id === "parent-element") {
        const parentRect = e.target.getBoundingClientRect();

        const childElem = document.querySelector('#child-element');

        childElem.style.top = parentRect.top + "px";
        childElem.style.left = parentRect.left + "px";
        childElem.classList.add('show');
    }
})