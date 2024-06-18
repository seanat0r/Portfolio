const moreBoxHoverEffect = () => {
    let moreBox = document.getElementById('moreBox');
    let firstRow = document.getElementById('firstRow');
    let secondRow = document.getElementById('secondRow');
    let thirdRow = document.getElementById('thirdRow');
    let navBarExtended = false;

    let toggleMenuDiv = document.getElementById('toggleMenu')

    const toggleNavBar = () => {
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
            toggleMenuDiv.style.display = 'none';
        } else {
            toggleMenuDiv.style.display = 'block';
        }
    }

    moreBox.addEventListener(('click'), toggleNavBar);
    toggleNavBarMenu()
};

moreBoxHoverEffect();
