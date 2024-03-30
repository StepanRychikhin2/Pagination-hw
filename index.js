const btn = document.querySelector(".btn");
const btnFind = document.querySelector(".btn2");
const input = document.querySelector(".input");
let currentPage = 1;


function getImages(page = 1, perPage = 15) {
    let inputf = input.value;
    const key = "43137010-1be9baf787f0e3e744a248bbd";
    const URL = `https://pixabay.com/api/?key=${key}&category=editors_choice&per_page=${perPage}&page=${page}&category=${inputf}`;

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector(".list");
        
        data.hits.forEach((ree) => {
            const img = document.createElement("img");
            img.classList.add("image");
            img.src = ree.webformatURL;
            list.appendChild(img);
        });
    })
    .catch(error => console.error(error));
}
    // getImages();

btn.addEventListener("click", () => {
    btn.textContent = "load more"
    console.log(currentPage);
    currentPage++;
    getImages(currentPage);   
     console.log(currentPage);
});
btnFind.addEventListener("click", () => {
    btn.textContent = "load more"
    getImages();
})