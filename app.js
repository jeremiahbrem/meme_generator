const form = document.getElementById('memeForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const image = document.getElementById('image');
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');
    if (image.value != "") {
        const div = document.createElement('div');
        const memes = document.querySelector('.memes');
        memes.appendChild(div);
        const img = document.createElement('img');
        img.src = image.value;
        div.prepend(img);
        const topText = document.createElement('div');
        topText.className = 'topText';
        topText.innerText = top.value;
        div.prepend(topText);
        const btmText = document.createElement('div');
        btmText.className = 'botText';
        btmText.innerText = bottom.value;
        div.prepend(btmText);
        addRemoveButton(div);
        image.value = "";
        top.value = "";
        bottom.value = "";
    }
})

function addRemoveButton(div) {
    const button = document.createElement('button');
    button.innerText = 'x';
    div.append(button);
    button.addEventListener('click', function(e) {
        div.remove();
    })
}