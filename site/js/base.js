let sidebar = document.querySelectorAll(".sidebar");
let sideList = document.querySelectorAll(".sideList");
let sideListP = document.querySelectorAll(".sideList > p");

sidebar.forEach(element => {
    element.addEventListener("click", event => {
        const targetDiv = event.currentTarget.querySelector('[data-url]');
        if (targetDiv) {
            const dataUrl = targetDiv.getAttribute('data-url');
            window.location.replace("/site/html/" + dataUrl + ".html");
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