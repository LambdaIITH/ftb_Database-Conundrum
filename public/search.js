document.getElementById("submitForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const value = document.getElementById("valueField").value;
  fetch("/submit-value", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: value }),
  })
    .then((response) => response.json())
    .then((data) => {document.getElementById("image").innerHTML(`<img src="${data[0].image}" alt="image"></img>`)})
    .catch((error) => console.error("Error:", error));
});
