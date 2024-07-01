const moreBoxHoverEffect = () => {
    let moreBox = document.getElementById('moreBox');
    let firstRow = document.getElementById('firstRow');
    let secondRow = document.getElementById('secondRow');
    let thirdRow = document.getElementById('thirdRow');
    let navBarExtended = false;

    let toggleMenuDivHome = document.getElementById('toggleMenuHome');
    let toggleMenuDivAbout = document.getElementById('toggleMenuHomeAboutMe');
    let toggleMenuDivProjects = document.getElementById('toggleMenuHomeProjects');
    let toggleMenuDivLink = document.getElementById('toggleMenuHomeLink');
    let toggleMenuDivPhone = document.getElementById('navPhone');

    const toggleNavBarAnimation = () => {
        if (!navBarExtended) {
            navBarExtended = true;
            thirdRow.classList.remove('rotateBackThirdRow');
            secondRow.classList.remove('rotateBackSecondRow');
            firstRow.classList.remove('firstRowBackToPosition');
            thirdRow.classList.remove('thirdRowBackToPosition');

            firstRow.classList.add('firstRowToSecondRow');
            thirdRow.classList.add('thirdRowToSecond');
    
            setTimeout(() => {
                thirdRow.classList.add('thirdRowRotate');
                secondRow.classList.add('secondRowRotate');
            }, 300);
        } else {
            navBarExtended = false;
            thirdRow.classList.remove('thirdRowRotate');
            secondRow.classList.remove('secondRowRotate');
            

            thirdRow.classList.add('rotateBackThirdRow');
            secondRow.classList.add('rotateBackSecondRow');

            setTimeout(() => {
                firstRow.classList.remove('firstRowToSecondRow');
                thirdRow.classList.remove('thirdRowToSecond');

                firstRow.classList.add('firstRowBackToPosition');
                thirdRow.classList.add('thirdRowBackToPosition');
            }, 300)
        }
        toggleNavBarMenu();
    };

    const toggleNavBarMenu = () => {
        if (!navBarExtended) {
            toggleMenuDivHome.style.display = 'none';
            toggleMenuDivAbout.style.display = 'none';
            toggleMenuDivProjects.style.display = 'none';
            toggleMenuDivLink.style.display = 'none';
            toggleMenuDivPhone.style.display = 'none';
        } else {
            toggleMenuDivHome.style.display = 'block';
            toggleMenuDivAbout.style.display = 'block';
            toggleMenuDivProjects.style.display = 'block';
            toggleMenuDivLink.style.display = 'block';
            toggleMenuDivPhone.style.display = 'block';
        }
    }

    moreBox.addEventListener(('click'), toggleNavBarAnimation);
    toggleNavBarMenu()
};

const carouselFunction = () => {
 let slides = Array.from(document.querySelectorAll('.slide'));
 let prevButton = document.getElementById('slider-arrow-prev');
 let nextButton = document.getElementById('slider-arrow-next');
 let slidIndex = 0;

 const updateCurrentSlide = () => {
    slides.forEach((slide, index) => {
        if (index === slidIndex) {
            slide.classList.add('current-slide');
        } else {
            slide.classList.remove('current-slide');
        }
    });
    slides[slidIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
 };

 prevButton.addEventListener('click', () => {
    if (slidIndex > 0) {
        slidIndex--;
    } else {
        slidIndex = slides.length - 1;
    }
    updateCurrentSlide();
 });
 
 nextButton.addEventListener('click', () => {
    if (slidIndex < slides.length -1) {
        slidIndex++;
    } else {
        slidIndex = 0;
    }

    updateCurrentSlide();
 });

 updateCurrentSlide();
};

const galleryFunction = () => {
    let galleryImage = document.getElementById('gallery-img');

    let galleryBtn1mM = document.getElementById('gallery-btn-1-mM');
    let galleryBtn2OW = document.getElementById('gallery-btn-2-OW');
    let galleryBtn3OW = document.getElementById('gallery-btn-3-OW');
    let galleryBtn4OW = document.getElementById('gallery-btn-4-OW');

    let gallerytxt1mM = document.getElementById('t1');
    let gallerytxt2OW = document.getElementById('t2');
    let gallerytxt3OW = document.getElementById('t3');
    let gallerytxt4OW = document.getElementById('t4');

    const changeImage = () => {
        galleryBtn1mM.addEventListener('click', () => {
            galleryImage.setAttribute('src', '/img/pic/mixedMessagePic.jpeg');
            gallerytxt1mM.style.display = 'block';
            gallerytxt2OW.style.display = 'none';
            gallerytxt3OW.style.display = 'none';
            gallerytxt4OW.style.display = 'none';
        });
        galleryBtn2OW.addEventListener('click', () => {
            galleryImage.setAttribute('src', '/img/pic/underConstruction.jpeg');
            gallerytxt1mM.style.display = 'none';
            gallerytxt2OW.style.display = 'block';
            gallerytxt3OW.style.display = 'none';
            gallerytxt4OW.style.display = 'none';
        });
        galleryBtn3OW.addEventListener('click', () => {
            galleryImage.setAttribute('src', '/img/pic/underConstruction.jpeg');
            gallerytxt1mM.style.display = 'none';
            gallerytxt2OW.style.display = 'none';
            gallerytxt3OW.style.display = 'block';
            gallerytxt4OW.style.display = 'none';
        });
        galleryBtn4OW.addEventListener('click', () => {
            galleryImage.setAttribute('src', '/img/pic/underConstruction.jpeg');
            gallerytxt1mM.style.display = 'none';
            gallerytxt2OW.style.display = 'none';
            gallerytxt3OW.style.display = 'none';
            gallerytxt4OW.style.display = 'block';
        });
    };
 
    changeImage();
};

moreBoxHoverEffect();
carouselFunction();
galleryFunction();
