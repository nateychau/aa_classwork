
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let newP = document.createElement('p');
    let textNode = document.createTextNode(string);
    newP.appendChild(textNode);
    let clock = document.getElementById('clock');
    // console.log(clock);
    clock.innerHTML = '';
    // clock.removeChild(clock.lastChild);
    htmlElement.appendChild(newP);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 vanilla DOM manipulation',partyHeader);

