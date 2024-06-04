document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    if (path.endsWith(".html")) {
        var newPath = "fakediscord";
        window.history.replaceState(null, "", newPath);
    }
});
