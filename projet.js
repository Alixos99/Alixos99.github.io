const Activepage = window.location;
const navlinks = document.querySelector('nav a');
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
});
