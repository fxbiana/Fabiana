var itemsFound = 0;
var totalItems = 6;

function foundItem(itemId) {
    var item = document.getElementById(itemId);
    if (!item.classList.contains('found')) {
        item.classList.add('found');
        itemsFound++;

        if (itemsFound === totalItems) {
            document.getElementById('play-again').style.display = 'block';
        }
    }
}
document.querySelectorAll('map area').forEach(function (area) {
    area.addEventListener('click', function () {
        var itemId = this.alt;
        foundItem(itemId);
    });
});

function replay() {
    location.reload();
}
