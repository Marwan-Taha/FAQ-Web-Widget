const faqs = document.querySelectorAll('.faq');
const buttons = document.querySelectorAll('.fav-toggle');

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active')
    })
});

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        faq.classList.toggle('active');
    })
})
