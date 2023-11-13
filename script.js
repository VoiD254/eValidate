"use strict";

let result = {
  tag: "",
  free: true,
  role: false,
  user: "arnavkawatra02",
  email: "arnavkawatra02@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked");
  resultCon.innerHTML = `<img width="110" src="images/load.svg" alt="">`;
  let email = document.getElementById("username").value;
  let key = "ema_live_q1B5P84fLrpH1GVOlL56mvwEBalrC0zEqrgmsD2L";
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let resp = await fetch(url);
  let result = await resp.json();
  let str = ``;
  let item = 0;

  for (item of Object.keys(result)) {
    if (result[item] !== "" && result[item] !== null && result[item] !== " ") {
      str += `<p><b>${item}</b>: ${result[item]}</p>`;
      item++;
    }
  }

  resultCon.innerHTML = str;
});
