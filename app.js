const old_input_container = document.querySelector(".input_container");

document.addEventListener("keypress", (e) => {
  const keyName = e.key;
  const eventCode = e.charCode;
  const eventkeyCode = e.code;

  const newhtml = `
      <div>
          <p>event Key</p>
          <span>${keyName}</span>
      </div>
      <div>
          <p>event KeyCode</p>
          <span>${eventCode}</span>
      </div>
      <div>
          <p>event Code</p>
          <span>${eventkeyCode}</span>
      </div>
  `;

  const new_input_container = document.createElement("div");
  new_input_container.classList.add("new_input_container_design");
  new_input_container.innerHTML = newhtml;

  // Clear existing content inside input_container
  old_input_container.innerHTML = "";

  // Append the new content
  old_input_container.appendChild(new_input_container);
});
