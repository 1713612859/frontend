var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;
container.onmousemove = debounce(getUserAction, 1000);


// 第一版
function debounce(func, wait) {
    var timeout;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(func, wait);
    }
}