console.log(
  "%c💻 This Is Just A Project Demo Site!\n👉 Visit my GitHub: https://github.com/print-aash",
  "color: #00ffcc; font-size: 16px; font-weight: bold; background: #111; padding: 8px; border-radius: 5px;"
);

fetch("https://official-joke-api.appspot.com/random_joke")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let h3 = document.createElement("h3");
    h3.innerText = data.setup;
    document.querySelector("body").appendChild(h3);
    let ah;
    setTimeout(() => {
      ah = document.createElement("h3");
      ah.innerText = `${data.punchline} 😝`;
      document.querySelector("body").appendChild(ah);
    }, 2000);
    let btn = document.createElement("button");
    btn.innerText = `~ Refresh For New Joke ~`;
    setTimeout(() => {
      document.querySelector("body").appendChild(btn);
    }, 3000);
    const del = () => {
      h3.remove();
      if (ah) {
        ah.remove();
      }
    };
    btn.addEventListener("click", () => {
      del();
      btn.remove();
      location.reload();
    });
  })
  .catch((err) => {
    console.log("Error :", err);
  });
