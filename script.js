var count = 0;
function incrementCount() {
    count++;
    document.getElementById('countDisplay').textContent = count.toString();
}
var button = document.getElementById('counterButton');
button.addEventListener('click', incrementCount);
