const progress = document.querySelector(".progress");
const range = document.querySelector("#range");

const length = progress.getTotalLength();

progress.style.strokeDasharray = length;
progress.style.strokeDashoffset = length;

function setProgress(value) {
  const normalized = value / 100;
  progress.style.strokeDashoffset = length * (1 - normalized);
}

range.addEventListener("input", (e) => {
  setProgress(Number(e.target.value));
});

setProgress(Number(range.value));
