const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-menu a, nav a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  const projects = [
    { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80', cat: 'Living Room', year: '2025', title: '2 BHK – Chinchwad', desc: 'Modern living room with sophisticated TV unit, ambient lighting, and custom shelving that blends elegance with functionality.' },
    { img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=80', cat: 'Kitchen', year: '2020', title: '2 BHK – Nanded City', desc: 'Sleek modular kitchen with white cabinets, premium countertops, and smart storage solutions for effortless cooking.' },
    { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80', cat: 'Living Room', year: '2022', title: '3 BHK – Sun City Road', desc: 'Spacious living room featuring contemporary furniture, warm tones, and a cohesive design language throughout.' },
    { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80', cat: 'Study Room', year: '2023', title: 'Study Room Design', desc: 'Productive and serene study space with custom bookshelves, ergonomic setup, and abundant natural light.' },
  ];

  function openModal(i) {
    const p = projects[i];
    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-cat').textContent = p.cat;
    document.getElementById('modal-year').textContent = p.year;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal').classList.add('open');
  }
  function closeModal() { document.getElementById('modal').classList.remove('open'); }
  function closeModalOutside(e) { if (e.target === document.getElementById('modal')) closeModal(); }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('fname').value = '';
      document.getElementById('femail').value = '';
      document.getElementById('fphone').value = '';
      document.getElementById('fmessage').value = '';
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';
      btn.disabled = false;
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
    }, 1200);
  }