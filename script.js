const form = document.getElementById('participant-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    await fetch('https://script.google.com/macros/s/AKfycbzL8ZZjPYgDiNpTFWiqxaNNFUlx9CuUODorH4OUPxwnCTpd6e2w2dk8cpQMF3dz8BvFkw/exec', {
      method: 'POST',
      mode: 'no-cors', // ADD THIS
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
  } catch (error) {
    alert('Error: ' + error.message);
    console.error('Error details:', error);
  }
});
