const toggle = document.querySelector('[data-checkbox]');
const arquivo = document.querySelector('[data-theme]');

    toggle.addEventListener('click', function() {
        const label = document.querySelector('[data-label]')

            if(toggle.checked) {
                arquivo.dataset.theme = 'dark';

                label.classList.remove('no-active');
                label.classList.add('active');
            } else {
                arquivo.dataset.theme = 'light';

                label.classList.remove('active');
                label.classList.add('no-active');
            }
    })