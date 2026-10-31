document.getElementById('fetchBtn').addEventListener('click', async () => {
  const responseBox = document.getElementById('response');
  responseBox.textContent = 'Loading...';
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    responseBox.textContent = 'Error: ' + err.message;
  }
});
