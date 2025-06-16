
        // Slideshow functionality
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function changeSlide(direction) {
            currentSlideIndex += direction;
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex < 0) {
                currentSlideIndex = slides.length - 1;
            }
            showSlide(currentSlideIndex);
        }

        function currentSlide(index) {
            currentSlideIndex = index - 1;
            showSlide(currentSlideIndex);
        }

        // Auto-advance slideshow
        setInterval(() => {
            changeSlide(1);
        }, 5000);

        // Minting functionality
        let quantity = 1;
        const basePrice = 0.05;

        function increaseQuantity() {
            if (quantity < 10) {
                quantity++;
                updateQuantityDisplay();
            }
        }

        function decreaseQuantity() {
            if (quantity > 1) {
                quantity--;
                updateQuantityDisplay();
            }
        }

        function updateQuantityDisplay() {
            document.getElementById('quantity').textContent = quantity;
            document.getElementById('totalPrice').textContent = (basePrice * quantity).toFixed(2);
        }

        function mintNFT() {
            const mintBtn = document.getElementById('mintBtn');
            const originalText = mintBtn.textContent;
            
            // Simulate minting process
            mintBtn.textContent = 'Minting...';
            mintBtn.disabled = true;
            
            // Here you would integrate with your actual Web3 minting contract
            // Example: await contract.mint(quantity, { value: ethers.utils.parseEther((basePrice * quantity).toString()) });
            
            setTimeout(() => {
                alert(`Successfully minted ${quantity} SUCCERS NFT${quantity > 1 ? 's' : ''}!`);
                mintBtn.textContent = originalText;
                mintBtn.disabled = false;
                
                // Update minted count (simulate)
                const currentMinted = parseInt(document.getElementById('minted').textContent);
                document.getElementById('minted').textContent = currentMinted + quantity;
            }, 2000);
        }

        // Smooth scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.1)';
            }
        });

        // Add more floating particles dynamically
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 10 + 5 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            document.body.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Create particles periodically
        setInterval(createParticle, 3000);

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            showSlide(0);
            updateQuantityDisplay();
        });
