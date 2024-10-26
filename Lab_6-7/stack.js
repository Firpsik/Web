let stack = [];
let stackCounter = 1;

function push() {
    stack.push(stackCounter);
    stackCounter++;
    renderStack();
}

function pop() {
    if (stack.length > 0) {
        stack.pop();
    }
    renderStack();
}

function renderStack() {
    const container = document.getElementById("stack-container");
    container.innerHTML = "";
    stack.forEach(item => {
        const square = document.createElement("div");
        square.className = "square";
        square.textContent = item;
        container.appendChild(square);
    });
}
