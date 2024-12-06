import axios from "axios";

// This is the API for fetching job listings from Indeed
export async function productsData() {
    try {
        // Make the API request with the necessary headers and query parameters
        const response = await axios.get(
            "https://indeed.p.rapidapi.com/ads/apisearch", // API URL
            {
                params: {
                    v: "2",                      // API version
                    format: "json",               // Response format
                    q: "java",                   // Job query (search term)
                    l: "austin, tx",              // Location (Austin, TX)
                    radius: "25",                 // Search radius (in miles)
                },
                headers: {
                    "X-RapidAPI-Host": "indeed.p.rapidapi.com", // Host URL for the API
                    "X-RapidAPI-Key": "YOUR_API_KEY",            // Replace with your actual RapidAPI Key
                },
            }
        );

        // Process the API response
        const jobs = response.data;

        // If the response contains job data, you can now access it
        console.log(jobs); // This will log the full response data

        // You can now use 'jobs' to access specific job details
        // For example, let's assume you're interested in the job titles:
        const jobTitles = jobs.results.map((job) => job.jobtitle);

        // Return the job titles or any other data you need
        return jobTitles;

    } catch (error) {
        // Error handling
        console.error("Error fetching data from Indeed API:", error);
        throw error; // Rethrow the error if you want to propagate it
    }
}
