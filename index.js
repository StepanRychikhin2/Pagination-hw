const btn = document.querySelector(".btn");
let currentPage = 1;
function getImages(page = 1, perPage = 15) {

    const URL = `https://pixabay.com/api/?key=43137010-1be9baf787f0e3e744a248bbd&category=editors_choice&per_page=${perPage}&page=${page}`;

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector(".list");
        data.hits.forEach((ree) => {
            const image = document.createElement("img");
            image.classList.add("image");
            image.src = ree.webformatURL;
            list.appendChild(image);
        });
    })
    .catch(error => console.error('error:', error));
}
    getImages();

btn.addEventListener("click", () => {
    console.log(currentPage);
    currentPage++;
    getImages(currentPage);   
     console.log(currentPage);
});
