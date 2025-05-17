// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Product Gallery
    initProductGallery();
    
    // Tabs
    initTabs();
    
    // Modals
    initModals();
    
    // Variants Selection
    initVariantSelectors();
    
    // Quantity Controls
    initQuantityControls();
    
    // Color Compare Feature
    initColorCompare();
});

// Product Gallery Functions
function initProductGallery() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update active state
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update main image
            const imageUrl = this.getAttribute('data-image');
            mainImage.src = imageUrl;
            
            // Optional: Add fade effect
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 100);
        });
    });
}

// Tabs Functions
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding panel
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Modal Functions
function initModals() {
    // Size Chart Modal
    const sizeChartBtn = document.querySelector('.size-chart-btn');
    const sizeChartModal = document.getElementById('sizeChartModal');
    
    // Compare Colors Modal
    const compareColorsBtn = document.querySelector('.compare-colors-btn');
    const compareColorsModal = document.getElementById('compareColorsModal');
    
    // Close buttons
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Modal overlays
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    
    // Event Listeners
    sizeChartBtn.addEventListener('click', function() {
        sizeChartModal.classList.add('active');
    });
    
    compareColorsBtn.addEventListener('click', function() {
        compareColorsModal.classList.add('active');
    });
    
    // Close on button click
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            modal.classList.remove('active');
        });
    });
    
    // Close on overlay click
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modalOverlays.forEach(overlay => {
                overlay.classList.remove('active');
            });
        }
    });
}

// Variant Selection Functions
function initVariantSelectors() {
    // Color options
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // You could update product image based on color here
            // const color = this.style.backgroundColor;
            // updateProductImageForColor(color);
        });
    });
    
    // Size options
    const sizeOptions = document.querySelectorAll('.size-option');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Quantity Control Functions
function initQuantityControls() {
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity input');
    
    minusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    });
}

// Color Compare Function
function initColorCompare() {
    const compareButtons = document.querySelectorAll('.compare-select-btn');
    
    compareButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle selected state
            this.classList.toggle('selected');
            
            // Count selected colors
            const selectedColors = document.querySelectorAll('.compare-select-btn.selected');
            
            // Optional: You could add logic here to display selected colors side by side
            // or highlight them in some way
        });
    });
}