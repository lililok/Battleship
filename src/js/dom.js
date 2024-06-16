export function startForm() {
    const body = document.querySelector('body');

    const dialog = document.createElement("dialog");
    dialog.id = "start-dialog";

    const form = document.createElement("form");
    form.id = "start-form";

    const playerName = document.createElement("input");
    playerName.type = "text";
    playerName.required = true;
    playerName.placeholder = "Name";

    form.appendChild(playerName);
    dialog.appendChild(form)
    body.appendChild(dialog)

    dialog.showModal();
}