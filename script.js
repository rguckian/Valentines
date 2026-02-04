document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    
    yesBtn.addEventListener('click', function() {
        response.textContent = '🎉 Yay! You made my day! ❤️';
        response.style.color = '#ff6b6b';
    });
    
    noBtn.addEventListener('click', function() {
        response.textContent = '😢 Maybe next time...';
        response.style.color = '#999';
        
        // Make the Yes button bigger to encourage clicking it instead
        yesBtn.style.transform = 'scale(1.2)';
    });
});
