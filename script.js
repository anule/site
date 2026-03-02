document.querySelectorAll('.hover-halo').forEach(el => {
    el.addEventListener('mousemove', function(e) {
        const rect = el.getBoundingClientRect();
        const radius = getComputedStyle(el).getPropertyValue("--radius");
        
        let posX = e.clientX - rect.left;
        let posY = e.clientY - rect.top;
        
        el.style.setProperty('--x', posX + 'px');
        el.style.setProperty('--y', posY + 'px');
        el.style.setProperty('--radius', '70px')
    })
    
    el.addEventListener('mouseleave', function() {
        el.style.removeProperty('--radius')
    })
})