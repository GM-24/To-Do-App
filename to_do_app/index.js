document.querySelector("form").onsubmit = () => {
  let task = document.getElementById("input").value;
  const li = document.createElement("li");
  li.innerHTML = task;
  document.getElementById("tasks").append(li);

  document.querySelector("input").value = "";

  document.getElementById("submit").disabled = true;
  li.classList.add("cursor");
  li.addEventListener("click", () => {
    li.classList.toggle("overline");
    document.querySelector("ol").removeChild(li);
  });

  //prevents from subbmitting
  return false;
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").disabled = true;

  document.getElementById("input").onkeyup = () => {
    if (document.getElementById("input").value.length > 0) {
      document.getElementById("submit").disabled = false;
    } else {
      document.getElementById("submit").disabled = true;
    }
  };
});

window.onload = function () {
  Particles.init({
    selector: ".background",
    maxParticles: 500,
    connectParticles: false,
    speed: 0.5,
  });
};
