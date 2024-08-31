document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", function () {
            const section = this.parentElement;
            const content = section.querySelector(".accordion-content");

            // Close any open sections
            document.querySelectorAll('.accordion-section.active').forEach(activeSection => {
                if (activeSection !== section) {
                    activeSection.classList.remove('active');
                    activeSection.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Toggle the clicked section
            section.classList.toggle("active");
            if (section.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});
