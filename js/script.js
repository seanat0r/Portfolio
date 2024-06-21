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

const animationDiaShowHome = () => {
    let position1 = 0;
    let position2 = 390;
    let position3 = 780;
    let position4 = 1170;
    let animationID1 = document.getElementById('animationID1');
    let animationID2 = document.getElementById('animationID2');
    let animationID3 = document.getElementById('animationID3')
    let animationID4 = document.getElementById('animationID4');

    setInterval ( () => {
        position1 += 1;
        position2 += 1;
        position3 += 1;
        position4 += 1;
        animationID1.style.left = position1 + 'px';
        animationID2.style.left = position2 + 'px';
        animationID3.style.left = position3 + 'px';
        animationID4.style.left = position4 +'px';

        if (position1 > window.innerWidth) {
            position1 = -50;
        };
        if (position2 > window.innerWidth) {
            position2 = -50;
        };
        if (position3 > window.innerWidth) {
            position3 = -50;
        };
        if (position4 > window.innerWidth) {
            position4 = -50;
        };
    }, 50);
}
moreBoxHoverEffect();
animationDiaShowHome();
