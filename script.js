var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

document.querySelectorAll('.remote-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetButton = document.getElementById(targetId);
        
        if (targetButton) {
            targetButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            if (!targetButton.classList.contains('active')) {
                targetButton.click();
            }
        }
    });
});
