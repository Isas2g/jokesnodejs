    const info = document.getElementById('info');
    const costs = document.getElementById('costs');
    const photo = document.getElementById('photo');
    const bg = document.getElementsByClassName('sec-inner')[0];

        
    const infoText = document.getElementById('infoText');
    const costsText = document.getElementById('costsText');
    const photoText = document.getElementById('photoText');
    

        info.addEventListener('click', () => {
            infoText.classList.remove('non-active');
            infoText.classList.add('active');
            costsText.classList.remove('active');
            costsText.classList.add('non-active');
            photoText.classList.remove('active');
            photoText.classList.add('non-active');
            info.classList.add('active-menu-el');
            costs.classList.remove('active-menu-el');
            photo.classList.remove('active-menu-el');
            bg.classList.remove('sec-bg');
            bg.classList.add('sec-inner');
        });
        
        costs.addEventListener('click', () => {
            infoText.classList.add('non-active');
            infoText.classList.remove('active');
            costsText.classList.add('active');
            costsText.classList.remove('non-active');
            photoText.classList.remove('active');
            photoText.classList.add('non-active');
            info.classList.remove('active-menu-el');
            costs.classList.add('active-menu-el');
            photo.classList.remove('active-menu-el');
            bg.classList.remove('sec-bg');
            bg.classList.add('sec-inner');
        });
        
        photo.addEventListener('click', () => {
            infoText.classList.add('non-active');
            infoText.classList.remove('active');
            costsText.classList.remove('active');
            costsText.classList.add('non-active');
            photoText.classList.add('active');
            photoText.classList.remove('non-active');
            info.classList.remove('active-menu-el');
            costs.classList.remove('active-menu-el');
            photo.classList.add('active-menu-el');
            bg.classList.add('sec-bg');
            bg.classList.remove('sec-inner');
        });

