const admin = {
    username: 'tenzovn',
    password: 'anhdaik110'
}

const links = {
    fb: 'https://www.facebook.com/engqunphug',
    ig: 'https://Instagram.com/engqunphug' ,
    github: 'https://github.com/tenzovn' ,
    linkedin: 'https://www.linkedin.com/in/enqungphug/',
}
const fbLink = document.getElementById('fbLink');
const igLink = document.getElementById('igLink');
const githubLink = document.getElementById('githubLink');
const githubLink2 = document.getElementById('githubLink2');
const linkedinLink = document.getElementById('linkedinLink');

fbLink.setAttribute('href', links.fb);
igLink.setAttribute('href', links.ig);
githubLink.setAttribute('href', links.github);
githubLink2.setAttribute('href', links.github);
linkedinLink.setAttribute('href', links.linkedin);

