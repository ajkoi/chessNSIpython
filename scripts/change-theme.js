    const my_img = document.getElementById('change-theme');
    my_img.addEventListener('click', () => {
        document.body.classList.toggle('light_theme');
        const my_img_now = my_img.getAttribute('src');
        if (my_img_now != 'images/menu/dark_theme_button.png') {
            my_img.setAttribute('src', 'images/menu/dark_theme_button.png');
        } else {
            my_img.setAttribute('src', 'images/menu/light_theme_button.png');
        }
    });
