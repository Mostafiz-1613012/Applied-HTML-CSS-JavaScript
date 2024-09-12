// JavaScript for toggling the sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "fit-content";
    document.getElementById("main").style.marginLeft = "20px";
    document.getElementById("main").style.marginright = "20px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Close the sidebar by default on small screens
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        closeNav();
    } else {
        openNav();
    }
});

// Initial call to set correct state on page load
if (window.innerWidth <= 768) {
    closeNav();
} else {
    openNav();
}