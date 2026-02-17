document.getElementById('leadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const responseDiv = document.getElementById('response');
    
    try {
        const res = await fetch('https://api.adbluemedia.com/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                api_key: '6b29d7158039c22af8fcd52569ff9a77',  // Your API key
                lead: { name, email, niche: 'ai_health_coaches', source: 'website' }
            })
        });
        const data = await res.json();
        if (res.ok) {
            responseDiv.textContent = 'Lead submitted! Your AI health tips are on the way.';
        } else {
            responseDiv.textContent = 'Error: ' + data.message;
        }
    } catch (error) {
        responseDiv.textContent = 'Network error. Try again.';
    }
});