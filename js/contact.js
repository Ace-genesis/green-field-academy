export function initContactForm() {

    const contactForm = document.querySelector('.contact-form form');
    const message = document.querySelector('#form-message');

    let clearTimer;

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const requiredFields = contactForm.querySelectorAll('[required]');

        let isValid = true;

        requiredFields.forEach(field => {

            if (field.value.trim() === '') {

                field.classList.add('input-error');

                isValid = false;

            } else {

                field.classList.remove('input-error');

            }

        });

        const email = contactForm.querySelector('input[type="email"]');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            email.classList.add('input-error');

            isValid = false;

        }

        if (!isValid) {

            alert('Please complete all required fields correctly.');

            return;

        }

        message.textContent =
    'Application submitted successfully. Thank you for choosing Greenfield International Academy. ';

    message.className = 'form-message success';

    clearTimer = setTimeout(() => {
        message.classList.remove('success')
    }, 10000)

        contactForm.reset();

    });

}