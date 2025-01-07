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
