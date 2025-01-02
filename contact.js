
document.querySelector('.messageform').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const inputs = document.querySelectorAll('.messageform input, .messageform textarea');
    let isValid = true;
  
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '';
      }
    });
  
    if (isValid) {
      alert('Form Submitted Successfully!');
    
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Animate Navigation Bar on Scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
  });
  
  // Social Media Links Click Handling
  document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const platform = this.getAttribute('href'); 
      alert(`Redirecting to ${platform}`);
      window.open(platform, '_blank');
    });
  });
  
