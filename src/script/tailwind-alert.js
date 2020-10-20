function tailwindAlert(pesan) {
    const alertTailwindHtml = document.createElement('div');
    alertTailwindHtml.setAttribute('role', 'alert');
    alertTailwindHtml.id = 'tailwind-alert';
    alertTailwindHtml.className = 'absolute right-0 top-0 w-1/3';
    alertTailwindHtml.innerHTML = `<div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Danger
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>${pesan}</p>
    </div>`;

    document.querySelector('body').insertAdjacentElement('afterbegin', alertTailwindHtml);

    setTimeout(() => {
        document.querySelector('#tailwind-alert').remove();
    }, 1500);
}

export default tailwindAlert;