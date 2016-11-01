(function (document) {
    var container = document.querySelector('svg-container');

    if (container) {
    
        container.innerHTML = "";

    

    } else {
        throw new Error('svginjector: Could not find element: svg-container');
    }

})(document);
