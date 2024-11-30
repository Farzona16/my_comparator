document.getElementById('compareForm').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const productName = document.getElementById('product').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Loading...';

    try {
        const response = await fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product: productName }),
        });

        const data = await response.json();

        if (data.success) {
            resultDiv.innerHTML = `<h3>Best price for ${productName}:</h3>
            <p>Seller: ${data.seller}</p>
            <p>Price: $${data.price}</p>`;
        } else {
            resultDiv.innerHTML = `<p>No data found for ${productName}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    }
});
