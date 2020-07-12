$(document).ready(function() {
    var file = new XMLHttpRequest();
    file.open("GET", "/blog/fake.txt", true);
    file.onreadystatechange = function() {
        if (file.readyState === 4) {
            if (file.status === 200) {
                text = file.responseText;
                $(".blog-content").innerHTML = text;
            }
        }
    }
});
