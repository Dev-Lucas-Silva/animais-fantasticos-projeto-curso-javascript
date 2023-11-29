export default function initDropdownMenu() {

}
const dopdownMenus = document.querySelectorAll('[data-dropdown]');

dopdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active');
};