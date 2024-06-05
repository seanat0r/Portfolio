inIndex = true;
inAbout = false;
inLinks = false;
inProjects = false;

const navBlueCircle = () => {
    let homeCircle = document.getElementById('homeCircle');
    if (inIndex === true) {
        homeCircle.style.border = 'solid 1px #005A9C'
    }
}