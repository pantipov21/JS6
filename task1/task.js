const modal_elem = document.getElementById('modal_main');
const good_modal_elem = document.getElementById('modal_success');

const old_class_name = modal_elem.className;
modal_elem.className += " modal_active";

const modalCloseClass = Array.from(modal_elem.getElementsByClassName('modal__close'));

modalCloseClass.forEach(elem => {
	if (elem.className.includes('show-success')==false){
		elem.onclick = () => {
			modal_elem.className = old_class_name;
		}
	}
	else
	{
		elem.onclick = () => {
			good_modal_elem.className += " modal_active";
		}
	}
});

