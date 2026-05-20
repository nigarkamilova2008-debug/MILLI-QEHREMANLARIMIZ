document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MOBİL MENYU (Hamburger düyməsinin açılıb-bağlanması)
    const hamburger = document.querySelector(".hamburger");
    const menyuUl = document.querySelector(".menyu ul");
    if (hamburger && menyuUl) {
        hamburger.addEventListener("click", () => menyuUl.classList.toggle("active"));
    }

    // 2. SƏLİS KEÇİD (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
                if (menyuUl.classList.contains("active")) menyuUl.classList.remove("active");
            }
        });
    });

    // 3. BACK TO TOP DÜYMƏSİ (Aşağı düşəndə görünməsi və yuxarı qaytarması)
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTop.style.opacity = "1";
                backToTop.style.visibility = "visible";
            } else {
                backToTop.style.opacity = "0";
                backToTop.style.visibility = "hidden";
            }
        });
        backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    // 4. KARTLARIN EKRANA GİRİŞ ANİMASİYASI
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".qəhrəman-kart, .film-kart, .zaman-qutusu").forEach(kart => {
        kart.style.opacity = "0";
        kart.style.transform = "translateY(20px)";
        kart.style.transition = "all 0.6s ease-out";
        observer.observe(kart);
    });
});