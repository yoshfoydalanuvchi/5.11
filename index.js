document.addEventListener("DOMContentLoaded", () => {
  const dataContainer = document.getElementById("data");
  const loadMessage = document.getElementById("load");

  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      return response.json();
    })
    .then((imgs) => {
      loadMessage.style.display = "none";

      let htmlContent = "";

      imgs.forEach((img) => {
        htmlContent += `
          <div class="card">
              <p><strong>Album ID:</strong> ${img.albumId}</p>
              <p><strong>img ID:</strong> ${img.id}</p>
              <p><strong>Title:</strong> ${img.title}</p>
              <p><strong>URL:</strong> <a href="${img.url}" target="_blank">${img.url}</a></p>
          </div>
        `;
      });

      dataContainer.innerHTML = htmlContent;
    })
    .catch((error) => {
      console.error("Fotosuratlarni olishda xato yuz berdi:", error);
      loadMessage.style.display = "none";
      dataContainer.innerHTML =
        "<p>Fotosuratlar yuklanishda xato yuz berdi. Iltimos, keyinroq qaytib koring.</p>";
    });
});
