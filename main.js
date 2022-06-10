function openModal() {
  // Dynamically create the modal elements with the document API.
  let container = document.createElement("div");
  let modal = document.createElement("div");
  let bar = document.createElement("div");
  let closeButton = document.createElement("button");
  // Add styling classes and text.
  container.classList.add("modal-container");
  modal.classList.add("modal");
  bar.classList.add("modal-bar");
  closeButton.classList.add("modal-close-btn");
  modal.innerText = "It works";
  // Add a click event on the close button that closes the entire modal component.
  closeButton.addEventListener("click", () => {
    container.remove();
  });
  // Join elements together.
  bar.append(closeButton);
  modal.prepend(bar);
  container.append(modal);
  // Add the created component to the DOM.
  document.body.prepend(container);
}

/**
 * Start executing Javascript from this function.
 */
(function main() {
  document.querySelector(".center-button").addEventListener("click", openModal);
})();
