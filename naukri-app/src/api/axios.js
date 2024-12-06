import axios from 'axios';

const fetchJobData = async () => {
  const options = {
    method: 'GET',
    url: 'https://indeed-indeed.p.rapidapi.com/apisearch',
    params: {
      v: '2',
      format: 'json',
      q: 'java',
      l: 'austin, tx',
      radius: '25'
    },
    headers: {
      'x-rapidapi-key': '5c592b1232msh6c3c7347caf27ddp1a790fjsn6d6f49dd06af',
      'x-rapidapi-host': 'indeed-indeed.p.rapidapi.com'
    }
  };

  try {
    // Perform the API request
    const response = await axios.request(options);
    
    // Log the entire response data
    console.log(response.data);

    // Assuming you want to display job listings or any specific data from the response:
    if (response.data && response.data.results) {
      const jobs = response.data.results;
      jobs.forEach(job => {
        console.log(`Job Title: ${job.jobtitle}`);
        console.log(`Company: ${job.company}`);
        console.log(`Location: ${job.location}`);
        console.log(`Job URL: ${job.url}`);
        console.log('---');
      });
    }
  } catch (error) {
    // Handle any errors that may occur during the request
    console.error('Error fetching job data:', error);
  }
};

// Call the function to fetch the data
fetchJobData();
