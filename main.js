window.addEventListener("resize", windowSize);

const sidebarToggle = document.querySelector('[data-bs-toggle="sidebar"]');
const app = document.querySelector('.app');

sidebarToggle.addEventListener('click', function(){    
    app.classList.toggle('sidebar-toggled')
});

function windowSize(){
    var x = window.matchMedia("(max-width: 767px)");
    if(x.matches){
        if(app.classList.contains('sidebar-toggled')){
            app.classList.toggle('sidebar-toggled')
        }        
    }
}