function openModal() {
  // Dynamically create the modal elements with the document API.
  let container = document.createElement("div");
  let modal = document.createElement("div");
  let text = document.createTextNode("It works");
  let header = document.createElement("div");
  let close = document.createElement("button");
  let footer = document.createElement("footer");
  let cancel = document.createElement("button");

  // Create the modal close event.
  const closeModal = () => {
    container.remove();
  };

  // Add styling classes and text.
  container.classList.add("modal-container");
  modal.classList.add("modal");
  header.classList.add("modal-header");
  close.classList.add("modal-close");
  footer.classList.add("modal-footer");
  cancel.classList.add("modal-cancel");
  cancel.innerText = "Cancel";

  // Add the close event on the close buttons.
  close.addEventListener("click", closeModal);
  cancel.addEventListener("click", closeModal);

  // Join elements together.
  header.append(close), footer.append(cancel);
  modal.append(header, text, footer), container.append(modal);

  // Add the created component to the DOM.
  document.body.prepend(container);
}

document.querySelector(".center-button").addEventListener("click", openModal);
