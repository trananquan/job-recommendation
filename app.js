const url = `https://job-recommendation-1.onrender.com/`; // Replace with your Render URL
const interval = 900000; // Interval in milliseconds (900 seconds-15 minutes)

function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}


setInterval(reloadWebsite, interval);
