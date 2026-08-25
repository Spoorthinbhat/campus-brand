// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Page navigation
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    // Close mobile menu
    navMenu.classList.remove('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Show product page with dynamic content
function showProductPage(name, seller, college, price, rating, reviews, image, description) {
    // Update order page content
    const orderPage = document.getElementById('order');
    if (orderPage) {
        const productImage = orderPage.querySelector('.order-product img');
        const productName = orderPage.querySelector('.product-details h1');
        const sellerInfo = orderPage.querySelector('.seller-info');
        const collegeInfo = orderPage.querySelector('.college-info');
        const productPrice = orderPage.querySelector('.product-price-large');
        const productDescription = orderPage.querySelector('.product-description');
        const ratingStars = orderPage.querySelector('.product-rating-large');
        
        if (productImage) productImage.src = image;
        if (productName) productName.textContent = name;
        if (sellerInfo) sellerInfo.innerHTML = `Sold by <strong>${seller}</strong>`;
        if (collegeInfo) collegeInfo.innerHTML = `<i class="fas fa-graduation-cap"></i> ${college}`;
        if (productPrice) productPrice.textContent = price;
        if (productDescription) productDescription.textContent = description;
        
        // Update rating
        if (ratingStars) {
            const fullStars = Math.floor(parseFloat(rating));
            const hasHalfStar = rating.includes('.5');
            let starsHTML = '';
            
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }
            if (hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }
            
            starsHTML += `<span>${rating} (${reviews} reviews)</span>`;
            ratingStars.innerHTML = starsHTML;
        }
        
        // Update order summary
        const subtotal = orderPage.querySelector('.summary-row:first-child span:last-child');
        const platformFee = orderPage.querySelector('.summary-row:nth-child(2) span:last-child');
        const total = orderPage.querySelector('.summary-row.total span:last-child');
        
        if (subtotal && platformFee && total) {
            const numericPrice = parseFloat(price.replace('₹', '').replace('/hr', ''));
            const fee = Math.round(numericPrice * 0.08);
            const totalPrice = numericPrice + fee;
            
            subtotal.textContent = `₹${numericPrice.toLocaleString()}`;
            platformFee.textContent = `₹${fee}`;
            total.textContent = `₹${totalPrice.toLocaleString()}`;
        }
    }
    
    showPage('order');
}

// Add click events to nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});

// Modal functionality
function showModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId + 'Modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Generate caption (demo)
function generateCaption() {
    const captions = [
        `✨ Vintage vibes, modern style! 🌟

This classic denim jacket has been given a new life. Perfect for adding that cool edge to any outfit. Sustainable fashion at its finest! 🌱

#ThriftFashion #SustainableStyle #CampusFashion #VintageFind #DenimDays`,

        `🎂 Make your celebrations unforgettable!

Handcrafted with love using premium ingredients. Each cake tells a story. Perfect for campus birthdays and special moments! 🎉

#CampusBaking #CustomCakes #BirthdayVibes #HomemadeLove #StudentBusiness`,

        `📸 Capture your best moments!

Professional photography that tells your story. From portraits to events, we make every frame count. Book your session today! 🌟

#CampusPhotography #PortraitSession #StudentPhotographer #Memories #ProfessionalPhotos`,

        `🎨 Design that speaks!

Transform your brand with stunning visuals. Logos, social media graphics, and more. Let's create something amazing together! ✨

#GraphicDesign #CampusCreatives #BrandIdentity #StudentDesigner #VisualArt`
    ];

    const randomCaption = captions[Math.floor(Math.random() * captions.length)];
    const generatedCaption = document.getElementById('generatedCaption');
    if (generatedCaption) {
        generatedCaption.innerHTML = randomCaption.replace(/\n/g, '<br>');
    }
}

// Generate post ideas
function generatePostIdeas() {
    const ideas = [
        `<p>📱 <strong>Idea 1:</strong> Before & After transformation of your product/service</p>
        <p>🎯 <strong>Idea 2:</strong> Day in the life of a campus entrepreneur</p>
        <p>💡 <strong>Idea 3:</strong> Customer review spotlight with photos</p>
        <p>🔥 <strong>Idea 4:</strong> Trending audio challenge related to your niche</p>
        <p>📚 <strong>Idea 5:</strong> Educational content about your craft</p>`,

        `<p>📱 <strong>Idea 1:</strong> Product styling tips for different occasions</p>
        <p>🎯 <strong>Idea 2:</strong> Meet the maker - your story and inspiration</p>
        <p>💡 <strong>Idea 3:</strong> Q&A session with your audience</p>
        <p>🔥 <strong>Idea 4:</strong> Collaboration with other campus businesses</p>
        <p>📚 <strong>Idea 5:</strong> Sneak peek of upcoming products</p>`,

        `<p>📱 <strong>Idea 1:</strong> Behind the scenes of your creation process</p>
        <p>🎯 <strong>Idea 2:</strong> Customer testimonials and success stories</p>
        <p>💡 <strong>Idea 3:</strong> Tips and tricks related to your niche</p>
        <p>🔥 <strong>Idea 4:</strong> Seasonal content and holiday specials</p>
        <p>📚 <strong>Idea 5:</strong> Interactive polls and quizzes</p>`
    ];

    const randomIdeas = ideas[Math.floor(Math.random() * ideas.length)];
    const generatedIdeas = document.getElementById('generatedPostIdeas');
    if (generatedIdeas) {
        generatedIdeas.innerHTML = randomIdeas;
    }
}

// Generate reel ideas
function generateReelIdeas() {
    const reelIdeas = [
        `<p>🎬 <strong>Reel Concept 1:</strong> "From Raw to Ready"</p>
        <p>• 0-3s: Show raw materials<br>• 3-6s: Quick craft process montage<br>• 6-9s: Final product reveal<br>• 9-15s: Model wearing/using the product<br>• Audio: Trending transition sound</p>
        <p>🎬 <strong>Reel Concept 2:</strong> "Customer Reaction"</p>
        <p>• Capture genuine customer reactions when they see your product<br>• Use emotional audio<br>• Add text overlays for impact</p>`,

        `<p>🎬 <strong>Reel Concept 1:</strong> "POV: Ordering from [Your Business]"</p>
        <p>• Show the customer journey from browsing to receiving<br>• Use trending POV audio<br>• Add satisfying transitions</p>
        <p>🎬 <strong>Reel Concept 2:</strong> "Pack an Order with Me"</p>
        <p>• ASMR-style packaging process<br>• Show care and attention to detail<br>• Use relaxing audio</p>`,

        `<p>🎬 <strong>Reel Concept 1:</strong> "Transformation Tuesday"</p>
        <p>• Show before/after of your service or product<br>• Use dramatic transition effects<br>• Add inspiring music</p>
        <p>🎬 <strong>Reel Concept 2:</strong> "Day in the Life"</p>
        <p>• Quick snippets of your entrepreneurial journey<br>• Show the reality behind the business<br>• Use relatable audio</p>`
    ];

    const randomReelIdeas = reelIdeas[Math.floor(Math.random() * reelIdeas.length)];
    const generatedReelIdeas = document.getElementById('generatedReelIdeas');
    if (generatedReelIdeas) {
        generatedReelIdeas.innerHTML = randomReelIdeas;
    }
}

// Generate poster copy
function generatePosterCopy() {
    const posterCopies = [
        `<p>🚀 <strong>HEADLINE:</strong> LIMITED TIME OFFER!</p>
        <p>✨ Get [Product Name] at [Discount]% OFF<br>📅 [Date]<br>📍 [Location]<br>⏰ Don't miss out!</p>
        <p>🎁 Special bonus for first 50 customers!</p>
        <p>📲 DM to order now!</p>`,

        `<p>🎉 <strong>HEADLINE:</strong> CAMPUS EXCLUSIVE!</p>
        <p>✨ Special offer just for Kristu Jayanti University students<br>📅 Valid till [Date]<br>🎁 Free campus delivery!</p>
        <p>⭐ Show your student ID for extra discount</p>
        <p>📲 Visit us at [Location]</p>`,

        `<p>💎 <strong>HEADLINE:</strong> PREMIUM QUALITY, STUDENT PRICES</p>
        <p>✨ Handcrafted with love by your fellow students<br>🎯 Perfect for [Occasion]<br>💰 Starting from just [Price]</p>
        <p>🌟 Limited pieces available</p>
        <p>📲 Book your order today!</p>`
    ];

    const randomPosterCopy = posterCopies[Math.floor(Math.random() * posterCopies.length)];
    const generatedPosterCopy = document.getElementById('generatedPosterCopy');
    if (generatedPosterCopy) {
        generatedPosterCopy.innerHTML = randomPosterCopy;
    }
}

// Generate product description
function generateProductDesc() {
    const productDescs = [
        `<p>✨ <strong>Product Description:</strong></p>
        <p>Elevate your style with this stunning [Product Name]! Perfect for [Target Audience] who appreciate quality and uniqueness.</p>
        <p><strong>Key Features:</strong><br>✅ [Feature 1]<br>✅ [Feature 2]<br>✅ [Feature 3]</p>
        <p>Each piece is carefully selected/crafted to ensure you stand out. Limited stock available - grab yours before it's gone!</p>
        <p>🌟 Why choose us?<br>• Quality guaranteed<br>• Campus delivery available<br>• Student-friendly prices</p>`,

        `<p>✨ <strong>Product Description:</strong></p>
        <p>Discover the perfect [Product Name] for your needs! Handcrafted/carefully selected with attention to every detail.</p>
        <p><strong>What makes it special:</strong><br>✅ Premium quality materials<br>✅ Unique design<br>✅ Perfect for [Target Audience]</p>
        <p>Join hundreds of satisfied customers on campus. This item is flying off the shelves!</p>
        <p>🎁 Perfect for gifting too!</p>`,

        `<p>✨ <strong>Product Description:</strong></p>
        <p>Transform your [Experience] with this amazing [Product Name]! Designed specifically for [Target Audience] who want the best.</p>
        <p><strong>Highlights:</strong><br>✅ Exceptional quality<br>✅ Great value for money<br>✅ Campus favorite</p>
        <p>Don't settle for less when you can have the best. Order now and see the difference!</p>
        <p>⭐ Rated 4.8+ by fellow students</p>`
    ];

    const randomProductDesc = productDescs[Math.floor(Math.random() * productDescs.length)];
    const generatedProductDesc = document.getElementById('generatedProductDesc');
    if (generatedProductDesc) {
        generatedProductDesc.innerHTML = randomProductDesc;
    }
}

// Generate campaign ideas
function generateCampaignIdeas() {
    const campaignIdeas = [
        `<p>🎯 <strong>Campaign: "Campus Takeover"</strong></p>
        <p><strong>Duration:</strong> 1 week<br><strong>Budget:</strong> Low</p>
        <p><strong>Strategy:</strong></p>
        <p>• Day 1-2: Teaser posts on Instagram<br>• Day 3-4: Influencer collaborations with campus creators<br>• Day 5-6: User-generated content contest<br>• Day 7: Grand finale with exclusive offers</p>
        <p><strong>Hashtags:</strong> #CampusBrandHub #[YourBrand] #CampusLife</p>
        <p><strong>Expected Outcome:</strong> Increased engagement, new followers, and sales boost</p>`,

        `<p>🎯 <strong>Campaign: "Student Spotlight"</strong></p>
        <p><strong>Duration:</strong> 2 weeks<br><strong>Budget:</strong> Medium</p>
        <p><strong>Strategy:</strong></p>
        <p>• Feature customer stories and testimonials<br>• Create a hashtag challenge<br>• Partner with campus clubs/organizations<br>• Host a live Q&A session</p>
        <p><strong>Hashtags:</strong> #KJUCampus #[YourBrand] #StudentSuccess</p>
        <p><strong>Expected Outcome:</strong> Brand loyalty and community building</p>`,

        `<p>🎯 <strong>Campaign: "Flash Sale Frenzy"</strong></p>
        <p><strong>Duration:</strong> 48 hours<br><strong>Budget:</strong> Low</p>
        <p><strong>Strategy:</strong></p>
        <p>• Countdown posts building anticipation<br>• Exclusive discounts for followers<br>• Limited quantity flash drops<br>• Last chance urgency posts</p>
        <p><strong>Hashtags:</strong> #FlashSale #[YourBrand] #CampusDeals</p>
        <p><strong>Expected Outcome:</strong> Quick sales boost and urgency-driven purchases</p>`
    ];

    const randomCampaignIdeas = campaignIdeas[Math.floor(Math.random() * campaignIdeas.length)];
    const generatedCampaignIdeas = document.getElementById('generatedCampaignIdeas');
    if (generatedCampaignIdeas) {
        generatedCampaignIdeas.innerHTML = randomCampaignIdeas;
    }
}

// Place order functionality
function placeOrder(event) {
    event.preventDefault();
    
    // Show confirmation modal
    const orderModal = document.getElementById('orderConfirmationModal');
    if (orderModal) {
        orderModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Filter tabs functionality
const filterTabs = document.querySelectorAll('.filter-tab');
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const filter = tab.textContent.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const seller = card.querySelector('.product-seller').textContent.toLowerCase();
            
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (title.includes(filter) || 
                      (filter === 'fashion' && (title.includes('jacket') || title.includes('t-shirt') || title.includes('denim') || title.includes('vintage'))) ||
                      (filter === 'beauty' && (title.includes('skincare') || title.includes('beauty'))) ||
                      (filter === 'food' && (title.includes('cake') || title.includes('baking') || title.includes('food'))) ||
                      (filter === 'services' && (title.includes('design') || title.includes('photography') || title.includes('tutoring') || title.includes('planning'))) ||
                      (filter === 'handmade' && (title.includes('handmade') || title.includes('jewelry') || title.includes('craft')))) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add hover effects to cards
document.querySelectorAll('.product-card, .service-card, .featured-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form submission handling (demo)
document.querySelectorAll('.modal-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        const modalContent = form.closest('.modal-content');
        if (modalContent && !modalContent.classList.contains('modal-success')) {
            const originalContent = modalContent.innerHTML;
            
            modalContent.innerHTML = `
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Success!</h2>
                <p>Your action has been completed successfully.</p>
                <button class="btn btn-primary" onclick="closeModalAndReset(this)">Close</button>
            `;
            
            // Store original content for reset
            modalContent.dataset.originalContent = originalContent;
        }
    });
});

function closeModalAndReset(button) {
    const modalContent = button.closest('.modal-content');
    const modal = button.closest('.modal');
    
    if (modalContent.dataset.originalContent) {
        modalContent.innerHTML = modalContent.dataset.originalContent;
    }
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize - show home page by default
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Set initial opacity for fade-in effect
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    
    // If image is already loaded
    if (img.complete) {
        img.style.opacity = '1';
    }
});

// Dynamic stats counter animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        // Format the value
        if (end >= 1000) {
            element.textContent = (value / 1000).toFixed(1) + 'K';
        } else if (end >= 100) {
            element.textContent = value.toLocaleString();
        } else {
            element.textContent = value;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.featured-card, .category-card, .step-card, .testimonial-card, .product-card, .service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Search functionality (demo)
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const seller = card.querySelector('.product-seller').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || seller.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = searchTerm === '' ? 'block' : 'none';
            }
        });
    });
}

// Add to cart button animation
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.onclick || this.onclick.toString().includes('showPage')) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.4)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Profile tabs (if added later)
function showProfileTab(tabId) {
    document.querySelectorAll('.profile-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    event.target.classList.add('active');
}

// Admin dashboard refresh simulation
function refreshAdminStats() {
    const statCards = document.querySelectorAll('.admin-stat-card');
    statCards.forEach(card => {
        const valueElement = card.querySelector('.admin-stat-content h3');
        if (valueElement) {
            const currentValue = valueElement.textContent;
            valueElement.style.opacity = '0.5';
            
            setTimeout(() => {
                valueElement.style.opacity = '1';
            }, 300);
        }
    });
}

// Show analytics section
function showAnalytics() {
    const analyticsSection = document.getElementById('analyticsSection');
    if (analyticsSection) {
        analyticsSection.style.display = 'block';
        analyticsSection.scrollIntoView({ behavior: 'smooth' });
        
        // Animate chart bars
        const chartBars = document.querySelectorAll('.chart-bar');
        chartBars.forEach((bar, index) => {
            bar.style.opacity = '0';
            bar.style.transform = 'scaleY(0)';
            setTimeout(() => {
                bar.style.opacity = '1';
                bar.style.transform = 'scaleY(1)';
            }, index * 100);
        });
    }
}

// Hide analytics section
function hideAnalytics() {
    const analyticsSection = document.getElementById('analyticsSection');
    if (analyticsSection) {
        analyticsSection.style.display = 'none';
    }
}

// Export functions for global access
window.showPage = showPage;
window.showModal = showModal;
window.closeModal = closeModal;
window.showProductPage = showProductPage;
window.generateCaption = generateCaption;
window.generatePostIdeas = generatePostIdeas;
window.generateReelIdeas = generateReelIdeas;
window.generatePosterCopy = generatePosterCopy;
window.generateProductDesc = generateProductDesc;
window.generateCampaignIdeas = generateCampaignIdeas;
window.placeOrder = placeOrder;
window.closeModalAndReset = closeModalAndReset;
window.showProfileTab = showProfileTab;
window.refreshAdminStats = refreshAdminStats;
window.showAnalytics = showAnalytics;
window.hideAnalytics = hideAnalytics;
