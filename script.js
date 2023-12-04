document.addEventListener("DOMContentLoaded", function() {

    var currentPage = window.location.href;

    var navLinks = document.querySelectorAll("#navigation a");

    navLinks.forEach(function(link) {
        if (link.href === currentPage) {
            link.classList.add("active");
        }
    });
});

function downloadResume() {
    window.location.href = "images/TaggartJohn_Resume.pdf";
}

document.addEventListener("DOMContentLoaded", function() {
    var imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(function(container) {
        container.addEventListener("mouseover", function() {
            container.querySelector(".description").style.display = "flex";
        });

        container.addEventListener("mouseout", function() {
            container.querySelector(".description").style.display = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var mobileMenuIcon = document.getElementById('mobile-menu-icon');
    var mobileNav = document.getElementById('mobile-nav');

    mobileMenuIcon.addEventListener('click', function() {
        // Toggle the visibility of the mobile nav when the icon is clicked
        mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
    });
});