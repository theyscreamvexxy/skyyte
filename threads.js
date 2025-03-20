document.addEventListener("DOMContentLoaded", () => {
    const actions = document.querySelectorAll(".actions span");

    actions.forEach(action => {
        action.addEventListener("click", () => {
            alert(`Clicked on ${action.textContent}`);
        });
    });
});
