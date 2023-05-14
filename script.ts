let count = 0;

function incrementCount() {

    count++;
    document.getElementById('countDisplay')!.textContent = count.toString();

}

const button = document.getElementById('counterButton');
button!.addEventListener('click', incrementCount);