const viewBtn = document.querySelector('.view-modal');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const input = popup.querySelector('input');
const copy = popup.querySelector('button');
const field = input.parentElement;

// Function to show the modal
const handleShowModal = () => {
	popup.classList.add('show');
};

// Function to close the modal
const handleCloseModal = () => {
	popup.classList.remove('show');
};

// Function to close the modal by clicking outside the modal
const handleOutsideClick = (e) => {
	const isClickedInsideModal = e.target.closest('.popup');
	if (!isClickedInsideModal && e.target !== viewBtn) {
		handleCloseModal();
	}
};

// Function to copy the input field value to clipboard
const handleCopyToClipboard = async () => {
	try {
		input.select();
		await navigator.clipboard.writeText(input.value);

		// Change the layout of copy button
		copy.innerText = 'Copied';
		copy.style.backgroundColor = 'var(--telegram-color)';

		// Highlight the copied text
		field.classList.add('active');

		// Remove the change after 3 seconds
		setTimeout(() => {
			window.getSelection().removeAllRanges();
			copy.innerText = 'Copy';
			copy.style.backgroundColor = 'var(--background-color)';

			field.classList.remove('active');
		}, 3000);
	} catch (err) {
		console.log(err);
	}
};

// Event Listener Functions
const handleInit = () => {
	viewBtn.addEventListener('click', handleShowModal);
	close.addEventListener('click', handleCloseModal);
	document.addEventListener('click', handleOutsideClick);
	copy.addEventListener('click', handleCopyToClipboard);
};

document.addEventListener('DOMContentLoaded', handleInit);
