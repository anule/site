document.querySelectorAll('.hover-halo').forEach(el => {
    el.addEventListener('mousemove', function(e) {
        const rect = el.getBoundingClientRect();
        const radius = getComputedStyle(el).getPropertyValue("--radius");
        
        let posX = e.clientX - rect.left;
        let posY = e.clientY - rect.top;
        
        el.style.background = `radial-gradient(circle at ${posX}px ${posY}px, #D9F4BB 0%, #fffaf0 ${radius})`
    })
    
    el.addEventListener('mouseleave', function() {
        el.style = ''
    })
})