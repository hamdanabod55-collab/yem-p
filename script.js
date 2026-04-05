document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.padding = '1rem 0';
        }
    });

    // Initial padding setup
    header.style.transition = 'padding 0.3s ease, box-shadow 0.3s ease';

    // Booking Form Submission Mock
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('date').value;
            const passengers = document.getElementById('passengers').value;

            if(!destination || !date || !passengers) {
                alert('الرجاء تعبئة جميع الحقول المطلوبة');
                return;
            }

            const searchBtn = document.querySelector('.btn-search');
            const originalText = searchBtn.innerHTML;
            
            searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري البحث...';
            searchBtn.disabled = true;

            // Simulate network request
            setTimeout(() => {
                alert(`تم البحث بنجاح!\nالوجهة: ${destination}\nالتاريخ: ${date}\nعدد المسافرين: ${passengers}\n\nسيتواصل معك أحد وكلائنا قريباً!`);
                searchBtn.innerHTML = originalText;
                searchBtn.disabled = false;
            }, 300);
        });
    }
});
