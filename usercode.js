module.exports = (data) => {
    // Replace 'your_link_here' with the actual link containing the JSON data
const url = 'https://www.instagram.com/reel/CrBqzwlgC_V/?__a=1&__d=dis';

// Function to recursively search for the "video_url" value
function searchForVideoUrl(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      // If the value is an object, recursively search within it
      const result = searchForVideoUrl(obj[key]);
      if (result) {
        return result;
      }
    } else if (key === 'video_url') {
      // Found the "video_url" property
      return obj[key];
    }
  }
  // "video_url" property not found
  return null;
}

// Make a GET request to fetch the JSON data
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Search for the "video_url" value
    const videoUrl = searchForVideoUrl(data);

    if (videoUrl) {
      data.videoUrl);
    } else {
      console.log("No 'video_url' property found in the JSON data.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
  return data
};

