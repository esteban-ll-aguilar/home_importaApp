var interaction = document.getElementById("interaction");
var dialogue = document.getElementById("dialogue");

var popperInstance = null;
var isDialogueVisible = false;

function showDialogue() {
    dialogue.style.display = "flex";
    setTimeout(function () {
        dialogue.style.opacity = "1";
        if (popperInstance) {
            popperInstance.destroy();
        }
        popperInstance = createPopper(interaction, dialogue, {
            placement: "top", // Posicionar el diálogo encima del osito
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10], // Ajustar el desplazamiento vertical
                    },
                },
            ],
        });
    }, 50);
    isDialogueVisible = true;
}

function hideDialogue() {
    dialogue.style.opacity = "0";
    setTimeout(function () {
        dialogue.style.display = "none";
        if (popperInstance) {
            popperInstance.destroy();
            popperInstance = null;
        }
    }, 300);
    isDialogueVisible = false;
}

interaction.addEventListener("click", function() {
    if (isDialogueVisible) {
        hideDialogue();
    } else {
        showDialogue();
    }
});
