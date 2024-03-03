document.getElementById("connectBtn").addEventListener("click", () => {
  fetch("/connect-mongodb")
    .then((response) => response.text())
    .then((data) => alert(data))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
});
