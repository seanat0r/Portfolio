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

moreBoxHoverEffect();
