//add class ativo for hide slide
function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  console.log(tabContent)
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime
      console.log(direcao)
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

//accordion faq hide/show
function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

//scroll suave with behavior smooth
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//animation section with transition 3d
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.5;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();