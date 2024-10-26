let queue = [];
let counter = 1;

function enqueue() {
    queue.push(counter);
    counter++;
    renderQueue();
}

function dequeue() {
    if (queue.length > 0) {
        queue.shift();
    }
    renderQueue();
}

function renderQueue() {
    const container = document.getElementById("queue-container");
    container.innerHTML = "";
    queue.forEach(item => {
        const square = document.createElement("div");
        square.className = "square";
        square.textContent = item;
        container.appendChild(square);
    });
}
