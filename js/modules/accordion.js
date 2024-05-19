export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  activeAccordion() {
    this.classList.toggle(this.activeClass);
    this.nextElementSibling.classList.toggle(this.activeClass);
  }

  toggleAccordion(item) {
    item.classList.add(this.activeClass);
    item.nextElementSibling.classList.add(this.activeClass);
  }

  // adiciona os eventosao accordion 
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // iniciar funcao
  init() {
    if (this.accordionList.length) {
      // ativa primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
