// Mobile burger menu
const bars = document.querySelector('.barsIcon')
const menu = document.querySelector('.menu')

document.addEventListener('DOMContentLoaded', () => {
    bars.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth > 888) {
            menu.classList.remove('active');
        }
    });
})

// Copy Button
const buttons = document.querySelectorAll('.copyButton')
document.addEventListener('DOMContentLoaded', () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const url = "play.hypecraft.com";
            navigator.clipboard.writeText(url).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Copied!',
                    text: 'URL has been copied to clipboard.',
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'swal2-custom-font'
                    }
                });
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });

    // Add custom CSS for SweetAlert2
    const style = document.createElement('style');
    style.innerHTML = `
        .swal2-custom-font {
            font-family: 'Roboto', sans-serif;
        }
    `;
    document.head.appendChild(style);
})


