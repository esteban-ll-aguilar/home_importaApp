document.addEventListener('scroll', function() {
    var button = document.querySelector('.fixed-button');
    var arrow = document.getElementById('arrow');
    var scrollPosition = window.scrollY + window.innerHeight;
    var pageHeight = document.body.scrollHeight;
    
    if (scrollPosition >= pageHeight) {
        arrow.classList.add('complete');
    } else {
        arrow.classList.remove('complete');
    }
});
