    const my_img = document.getElementById('change-theme');
    my_img.addEventListener('click', () => {
        document.body.classList.toggle('light_theme');
        const my_img_now = my_img.getAttribute('src');
        console.log(my_img_now)
        if (my_img_now != '../images/menu/dark_theme_button.png') {
            my_img.setAttribute('src', src="{{ url_for('static', filename='images/menu/light_theme_button.png') }}");
            console.log("ccava")
        } else {
            my_img.setAttribute('src', src="{{ url_for('static', filename='images/menu/dark_theme_button.png') }}");
        }
    });
