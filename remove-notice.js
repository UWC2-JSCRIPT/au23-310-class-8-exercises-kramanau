const banner = document.getElementById('maintenance-notice');

const removeBanner = () => {
    banner.classList.add('hidden');
}

setTimeout(removeBanner, 5000);