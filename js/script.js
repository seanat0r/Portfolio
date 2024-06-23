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
    const minDistance = 100;
    let animationID1 = document.getElementById('animationID1');
    let animationID2 = document.getElementById('animationID2');
    let animationID3 = document.getElementById('animationID3');
    let animationID4 = document.getElementById('animationID4');

    let positions = [
        { element: animationID1, position: 0 },
        { element: animationID2, position: 390 },
        { element: animationID3, position: 780 },
        { element: animationID4, position: 1170 }
    ];

    const animate = () => {
        positions.forEach(obj => {
            obj.position += 0.5; // Bewegung um 0.5 Pixel pro Frame
            obj.element.style.left = obj.position + 'px';
            if (obj.position > window.innerWidth) {
                obj.position = -50; // Zurücksetzen, wenn das Element den Bildschirm verlässt
            }
        });

        adjustPositions(); // Anpassung der Positionen bei Bedarf

        requestAnimationFrame(animate);
    };

    const adjustPositions = () => {
        positions.sort((a, b) => a.position - b.position);

        for (let i = 1; i < positions.length; i++) {
            if (positions[i].position - positions[i - 1].position < minDistance) {
                positions[i].position = positions[i - 1].position + minDistance;
                positions[i].element.style.left = positions[i].position + 'px'; // Aktualisieren der DOM-Position
            }
        }
    };

    animate(); // Starten der Animation
};
moreBoxHoverEffect();
animationDiaShowHome();
