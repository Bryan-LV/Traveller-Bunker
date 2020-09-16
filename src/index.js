
function addIntersectionObserver() {
  const bookingSection = document.querySelector('#booking-section');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((itemsEntered) => {
      itemsEntered.forEach(item => {
        if (item.isIntersecting) {
          console.log('working');
          item.target.classList.add('animate__animated', 'animate__fadeInUp', 'opacity-1');
          observer.unobserve(item.target);
        }
      })
    }, {})
    observer.observe(bookingSection);
  } else {
    bookingSection.classList.add('animate__animated', 'animate__fadeInUp', 'opacity-1');
  }

}

addIntersectionObserver();