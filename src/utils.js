function basePath() {
    var path = document.getElementsByTagName('base');
    if (path.length == 0) {
        path = '/';
    } else {
        path = path[0].href.replace(window.location.origin, '');
    }
    return path;
} 

export { basePath };
