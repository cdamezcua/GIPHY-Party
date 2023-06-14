var submitButton = document.getElementById("submitButon");
var gifsDiv = document.getElementById("GifsDiv");
var searchInput = document.getElementById("searchInput"); 

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("click!");
  try {
    const baseURL = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "tS3UHHDoc6SYf5kahCjJppqj19Lnq7oE";
    const searchTerm = searchInput.value;

    const url = new URL(baseURL);
    url.searchParams.append("api_key", apiKey);
    url.searchParams.append("q", encodeURIComponent(searchTerm));

    const response = await fetch(url);
    const data = await response.json();

    gifsDiv.innerHTML = "";
    const images = data.data;
    images.forEach(gif => {
        const img = document.createElement("img");
        img.src = gif.images.original.url;
        gifsDiv.appendChild(img);
    });
  } catch (error) {
    console.log(error);
  }
});
