let sidebar = document.querySelectorAll(".sidebar");
let sideList = document.querySelectorAll(".sideList");
let sideListP = document.querySelectorAll(".sideList > p");

sidebar.forEach(element => {
    element.addEventListener("click", event => {
        if (event.target.tagName === 'IMG') {
            console.log("/site/html/" + event.target.alt + ".html");
            // window.location.replace("/site/html/" + event.target.alt + ".html");
        }
    });
});;

sideList.forEach(element => {
    element.addEventListener("click", event => {
        if (event.target.tagName === 'IMG') {

        }
    });
});;

sideListP.forEach(p => {
    p.textContent = `・${p.textContent}`;
});