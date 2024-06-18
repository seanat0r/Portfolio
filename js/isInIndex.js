const inIndex = true;
const inAbout = false;
const inProjects = false;
const inLinks = false;

const navBlueCircle = () => {
    let homeCircle = document.getElementById('homeCircle');
    if (inIndex === true) {
        console.log('InIndex is:' + inIndex);
        homeCircle.style.border = 'solid 1px #005A9C';
        homeCircle.style.borderRadius = '25px';
        homeCircle.style.backgroundColor = '#005A9C90'
        homeCircle.style.margin = '0.25rem 0';
    };
};

navBlueCircle();