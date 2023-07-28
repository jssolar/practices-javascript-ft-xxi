window.onload = function () {
    let selectedImg = null;

    let gallery = [
        "https://picsum.photos/id/420/900/400",
        "https://picsum.photos/id/120/900/400",
        "https://picsum.photos/id/220/900/400",
        "https://picsum.photos/id/330/900/400",
        "https://picsum.photos/id/980/900/400",
        "https://picsum.photos/id/900/900/400",
        "https://picsum.photos/id/580/900/400",
        "https://picsum.photos/id/270/900/400",
        "https://picsum.photos/id/610/900/400",
        "https://picsum.photos/id/666/900/400",        
        "https://picsum.photos/id/129/900/400",        
        "https://picsum.photos/id/310/900/400"        
    ]

    let btnPrev = document.querySelector('.btnPrev')
    let btnNext = document.querySelector('.btnNext')


    loadGallery(gallery, document.querySelector('.gallery__items'));


    btnPrev.addEventListener('click', () => {
        //console.log('Hanciendo click (prev)')
        //console.log(selectedImg);
        prevImage(selectedImg)
    })

    btnNext.addEventListener('click', () => {
        //console.log('Hanciendo click (next)')
        //console.log(selectedImg);
        nextImages(selectedImg)
    })


    function prevImage(selectedImg) {
        if(selectedImg === null || (selectedImg - 1) < 0) selectedImg = gallery.length - 1;
        loadImage(gallery[selectedImg], document.querySelector('.gallery__loader__preview'), selectedImg-=1)
    }

    function nextImages(selectedImg) {
        if((selectedImg === null) || ((selectedImg + 1) > gallery.length)) selectedImg = 0;
        loadImage(gallery[selectedImg], document.querySelector('.gallery__loader__preview'), selectedImg+=1)
    }

    function loadGallery(images, itemsContainer) {
        if (!Array.isArray(images)) throw new Error('Images debe ser un array');

        images.forEach((url, index) => {
            let newImage = createImage(url);
            newImage.classList.add('gallery__items__item');
            newImage.addEventListener('click', (evento) => {
                let { src } = evento.target;
                loadImage(src, document.querySelector('.gallery__loader__preview'), index)
            });
            itemsContainer.appendChild(newImage)
        })
    }

    function loadImage(src, loader, position) {
        loader.src = src;
        selectedImg = position;
    }

    function createImage(url) {
        let img = document.createElement('img')
        img.src = url;
        return img
    }

}