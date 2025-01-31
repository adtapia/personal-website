document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });


  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
  
    document.querySelectorAll('section').forEach(section => {
      if (scrollPosition >= section.offsetTop - 50) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector(`.nav-links a[href="#${section.id}"]`).classList.add('active');
      }
    });
  });

  const toggleButton = document.querySelector("#toggleButton");

  toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleButton.innerText = document.body.classList.contains("dark-mode") ? "🌑" : "☀️";
  });