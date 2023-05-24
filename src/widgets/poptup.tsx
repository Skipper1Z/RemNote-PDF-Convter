import { renderWidget } from "@remnote/plugin-sdk";

function Popup() {
    return (
        <div
            className="p-1 cursor-pointer rounded-md border border-solid grid gap-1 rn-clr-background-primary rn-clr-content-primary"
            >
            {"Try Harder >:("}
            </div>

    )
}

renderWidget(Popup)