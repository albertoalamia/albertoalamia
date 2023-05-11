document.addEventListener("DOMContentLoaded", function() {
  const bigLogo = document.getElementById("big-logo");
  const services = document.querySelectorAll(".service");

  bigLogo.style.opacity = 1;

  bigLogo.addEventListener("click", function() {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  });

  function checkScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    services.forEach(service => {
      const serviceTop = service.getBoundingClientRect().top;
      const serviceBottom = serviceTop + service.offsetHeight;
      if (serviceTop < scrollPosition && serviceBottom > window.scrollY) {
        service.classList.add("visible");
      }
    });
  }

  services.forEach(service => {
    const serviceTop = service.getBoundingClientRect().top;
    const serviceBottom = serviceTop + service.offsetHeight;
    if (serviceTop < window.innerHeight && serviceBottom > 0) {
      service.classList.add("visible");
    }
  });

  window.addEventListener("scroll", checkScroll);
});
