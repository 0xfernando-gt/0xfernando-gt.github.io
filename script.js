
document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
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

    let checkboxes = document.querySelectorAll("input[type=checkbox]");

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                console.log(this.id + " completado");
            } else {
                console.log(this.id + " no completado");
            }
        });
    });
});


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ocultar todos los elementos con class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Eliminar la clase "active" de todos los elementos con class="tablinks"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la pestaña actual y añadir una clase "active" al botón que abrió la pestaña
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Configura la primera pestaña como activa por defecto
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tablinks').click();
});
