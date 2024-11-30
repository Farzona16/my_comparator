document.getElementById('product-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const productName = document.getElementById('product-name').value.trim();
    const resultDiv = document.getElementById('result');

    if (!productName) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter a product name.</p>';
        return;
    }

    const response = await fetch(`http://localhost:5000?product=${encodeURIComponent(productName)}`);
    const data = await response.json();

    if (data.error) {
        resultDiv.innerHTML = `<p style="color: red;">${data.error}</p>`;
    } else {
        resultDiv.innerHTML = `
            <h2>Best Deal Found:</h2>
            <p>Product: ${data.name}</p>
            <p>Source: ${data.source}</p>
            <p>Price: $${data.price}</p>
        `;
    }
});
