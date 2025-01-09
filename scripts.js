            function openTab(tabName) {
                const tabContents = document.getElementsByClassName('tab-content');
                const tabs = document.getElementsByClassName('tab');
                
                Array.from(tabContents).forEach(content => {
                    content.classList.remove('active');
                });

                Array.from(tabs).forEach(tab => {
                    tab.classList.remove('active');
                });

                document.getElementById(tabName).classList.add('active');
                event.currentTarget.classList.add('active');
            }

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            function moveSlide(n) {
                const slides = document.querySelectorAll('.carousel-slide img');
                slideIndex = (slideIndex + n + slides.length) % slides.length;
                const offset = -slideIndex * 100;
                document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
            }
            
            document.addEventListener('DOMContentLoaded', () => {
                const counters = document.querySelectorAll('.stat-number');
                const speed = 200; // Adjust speed as needed
            
                const countUp = (counter, target, suffix) => {
                    const updateCount = () => {
                        const count = +counter.innerText.replace(/[^0-9]/g, '');
                        const increment = target / speed;
            
                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment).toLocaleString() + suffix;
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target.toLocaleString() + suffix;
                        }
                    };
            
                    updateCount();
                };
            
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const counter = entry.target;
                            const target = +counter.getAttribute('data-target');
                            const originalText = counter.innerText;
                            const suffix = originalText.replace(/[0-9,]/g, '');
                            counter.innerText = '0' + suffix;
                            countUp(counter, target, suffix);
                            observer.unobserve(counter);
                        }
                    });
                }, { threshold: 0.5 });
            
                counters.forEach(counter => {
                    observer.observe(counter);
                });
            });
