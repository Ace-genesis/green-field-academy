export function initAdmissionForm() {

    const admissionForm = document.querySelector('#admission-form');
    const message = document.querySelector('#form-message');
    let clearTimer;

    if (!admissionForm) return;

    admissionForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const requiredFields = admissionForm.querySelectorAll('[required]');

        let isValid = true;

        requiredFields.forEach(field => {

            if (field.type === 'checkbox') {

                if (!field.checked) {

                    field.classList.add('input-error');

                    isValid = false;

                } else {

                    field.classList.remove('input-error');

                }

            } else {

                if (field.value.trim() === '') {

                    field.classList.add('input-error');

                    isValid = false;

                } else {

                    field.classList.remove('input-error');

                }

            }

        });

        const email = document.querySelector('#email');

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            email.classList.add('input-error');

            isValid = false;

        }

        if (!isValid) {

            alert('Please complete all required fields correctly.');

            return;

        }

        message.classList.add('show');

        clearTimer = setTimeout(() => {message.classList.remove('show')}, 10000)

        admissionForm.reset();

    });

}




