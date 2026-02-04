// Style bank - different color themes
const styleBank = [
    {
        name: 'Classic Pink',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffecd2 100%)',
        containerBg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 240, 245, 0.95))',
        heartGradient: 'linear-gradient(135deg, #ff6b9d 0%, #ff3366 100%)',
        titleGradient: 'linear-gradient(135deg, #ff6b9d, #c06c84)',
        titleColor: '#c06c84',
        messageColor: '#8b5a7d',
        yesButtonBg: 'linear-gradient(135deg, #ff6b9d, #ff3366)',
        yesButtonHover: 'linear-gradient(135deg, #ff3366, #ff1744)',
        noButtonBg: 'linear-gradient(135deg, #ffc3c9, #ffb3ba)',
        noButtonHover: 'linear-gradient(135deg, #ffb3ba, #ffa3aa)',
        noButtonColor: '#8b5a7d',
        responseColor: '#ff3366'
    },
    {
        name: 'Royal Purple',
        background: 'linear-gradient(135deg, #a8c0ff 0%, #c084fc 50%, #e879f9 100%)',
        containerBg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(243, 232, 255, 0.95))',
        heartGradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
        titleGradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
        titleColor: '#7c3aed',
        messageColor: '#6b21a8',
        yesButtonBg: 'linear-gradient(135deg, #a855f7, #9333ea)',
        yesButtonHover: 'linear-gradient(135deg, #9333ea, #7e22ce)',
        noButtonBg: 'linear-gradient(135deg, #e9d5ff, #d8b4fe)',
        noButtonHover: 'linear-gradient(135deg, #d8b4fe, #c4b5fd)',
        noButtonColor: '#6b21a8',
        responseColor: '#9333ea'
    },
    {
        name: 'Sunset Orange',
        background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 50%, #fd79a8 100%)',
        containerBg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 245, 235, 0.95))',
        heartGradient: 'linear-gradient(135deg, #ff7675 0%, #d63031 100%)',
        titleGradient: 'linear-gradient(135deg, #e17055, #d63031)',
        titleColor: '#d63031',
        messageColor: '#c44569',
        yesButtonBg: 'linear-gradient(135deg, #ff7675, #d63031)',
        yesButtonHover: 'linear-gradient(135deg, #d63031, #b71c1c)',
        noButtonBg: 'linear-gradient(135deg, #fdcb6e, #fab1a0)',
        noButtonHover: 'linear-gradient(135deg, #fab1a0, #ffeaa7)',
        noButtonColor: '#c44569',
        responseColor: '#d63031'
    },
    {
        name: 'Rose Gold',
        background: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 50%, #f9a5e7 100%)',
        containerBg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 236, 245, 0.95))',
        heartGradient: 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
        titleGradient: 'linear-gradient(135deg, #ec4899, #be185d)',
        titleColor: '#be185d',
        messageColor: '#831843',
        yesButtonBg: 'linear-gradient(135deg, #ec4899, #be185d)',
        yesButtonHover: 'linear-gradient(135deg, #be185d, #9f1239)',
        noButtonBg: 'linear-gradient(135deg, #fbb6ce, #fbcfe8)',
        noButtonHover: 'linear-gradient(135deg, #fbcfe8, #fce7f3)',
        noButtonColor: '#831843',
        responseColor: '#be185d'
    },
    {
        name: 'Ocean Blue',
        background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 50%, #9795f0 100%)',
        containerBg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(235, 245, 255, 0.95))',
        heartGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        titleGradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        titleColor: '#1e40af',
        messageColor: '#1e3a8a',
        yesButtonBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        yesButtonHover: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
        noButtonBg: 'linear-gradient(135deg, #bfdbfe, #93c5fd)',
        noButtonHover: 'linear-gradient(135deg, #93c5fd, #60a5fa)',
        noButtonColor: '#1e3a8a',
        responseColor: '#2563eb'
    },
    {
        name: 'Mint Green',
        background: 'linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 50%, #fde68a 100%)',
        containerBg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(240, 253, 244, 0.95))',
        heartGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        titleGradient: 'linear-gradient(135deg, #34d399, #059669)',
        titleColor: '#047857',
        messageColor: '#065f46',
        yesButtonBg: 'linear-gradient(135deg, #10b981, #059669)',
        yesButtonHover: 'linear-gradient(135deg, #059669, #047857)',
        noButtonBg: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
        noButtonHover: 'linear-gradient(135deg, #a7f3d0, #6ee7b7)',
        noButtonColor: '#065f46',
        responseColor: '#059669'
    }
];

// Apply a random style from the style bank
function applyRandomStyle() {
    const randomIndex = Math.floor(Math.random() * styleBank.length);
    const selectedStyle = styleBank[randomIndex];
    
    // Apply background
    document.body.style.background = selectedStyle.background;
    
    // Apply container styles
    const container = document.querySelector('.container');
    container.style.background = selectedStyle.containerBg;
    
    // Apply heart gradient
    const heartBefore = document.querySelector('.heart');
    if (heartBefore) {
        const style = document.createElement('style');
        style.textContent = `
            .heart:before,
            .heart:after {
                background: ${selectedStyle.heartGradient} !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Apply title styles
    const title = document.querySelector('.title');
    title.style.background = selectedStyle.titleGradient;
    title.style.webkitBackgroundClip = 'text';
    title.style.webkitTextFillColor = 'transparent';
    title.style.backgroundClip = 'text';
    
    // Apply message color
    const message = document.querySelector('.message');
    message.style.color = selectedStyle.messageColor;
    
    // Apply button styles
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.style.background = selectedStyle.yesButtonBg;
    yesBtn.dataset.hoverBg = selectedStyle.yesButtonHover;
    
    const noBtn = document.getElementById('noBtn');
    noBtn.style.background = selectedStyle.noButtonBg;
    noBtn.style.color = selectedStyle.noButtonColor;
    noBtn.dataset.hoverBg = selectedStyle.noButtonHover;
    
    // Add hover effects
    yesBtn.addEventListener('mouseenter', function() {
        this.style.background = selectedStyle.yesButtonHover;
    });
    yesBtn.addEventListener('mouseleave', function() {
        this.style.background = selectedStyle.yesButtonBg;
    });
    
    noBtn.addEventListener('mouseenter', function() {
        this.style.background = selectedStyle.noButtonHover;
    });
    noBtn.addEventListener('mouseleave', function() {
        this.style.background = selectedStyle.noButtonBg;
    });
    
    // Store response color for later use
    document.body.dataset.responseColor = selectedStyle.responseColor;
    
    console.log(`Applied style: ${selectedStyle.name}`);
}

document.addEventListener('DOMContentLoaded', function() {
    // Apply random style on page load
    applyRandomStyle();
    
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    
    yesBtn.addEventListener('click', function() {
        response.textContent = '🎉 Yay! You made my day! ❤️';
        response.style.color = document.body.dataset.responseColor || '#ff6b6b';
    });
    
    noBtn.addEventListener('click', function() {
        response.textContent = '😢 Maybe next time...';
        response.style.color = '#999';
        
        // Make the Yes button bigger to encourage clicking it instead
        yesBtn.style.transform = 'scale(1.2)';
    });
});
