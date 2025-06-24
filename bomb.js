let count = 0;
function startBomb() {
        setInterval(() => {
                const div = document.createElement('div');
                div.className = 'bomb';
                div.style.left = Math.random() * window.innerWidth + 'px';
                div.style.top = Math.random() * window.innerHeight + 'px';
                div.textContent = `Fork ${count++}`;
                document.body.appendChild(div);
        }, 100);
}

