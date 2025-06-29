const canvas = document.getElementById("circleCanvas");
const ctx = canvas.getContext("2d");
const radius = canvas.width / 2;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const notes = ["C", "G", "D", "A", "E", "B", "F#", "Db", "Ab", "Eb", "Bb", "F"];

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 10, 0, 2 * Math.PI);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 3;
    ctx.stroke();

    for (let i = 0; i < notes.length; i++) {
        const angle = (i / notes.length) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + Math.cos(angle) * (radius - 50);
        const y = centerY + Math.sin(angle) * (radius - 50);
        ctx.fillText(notes[i], x, y);
    }
}
drawCircle();
