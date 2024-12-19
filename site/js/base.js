let sidebar = document.querySelectorAll(".sidebar");

sidebar.forEach(element => {
    element.addEventListener("click", event => {
        if (event.target.tagName === 'IMG') {
            console.log("/site/html/" + event.target.alt + ".html");
            // window.location.replace("/site/html/" + event.target.alt + ".html");
        }
    });
});;