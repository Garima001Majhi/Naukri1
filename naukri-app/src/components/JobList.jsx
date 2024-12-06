import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobList() {
  const [jobs, setJobs] = useState([]);  // State to hold job data
  const [loading, setLoading] = useState(true);  // State to show loading indicator
  const [error, setError] = useState(null);  // State to store errors, if any

  useEffect(() => {
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
        const response = await axios.request(options);
        // Update state with fetched job data
        if (response.data && response.data.results) {
          setJobs(response.data.results);
        }
      } catch (error) {
        // Handle error and set error state
        setError('Error fetching job data.');
        console.error('Error:', error);
      } finally {
        setLoading(false);  // Set loading to false once the request is done
      }
    };

    // Fetch job data when the component mounts
    fetchJobData();
  }, []);  // Empty dependency array ensures it runs only once after mount

  // Conditional rendering based on the loading state
  if (loading) return <div>Loading...</div>;

  // Conditional rendering for errors
  if (error) return <div>{error}</div>;

  // If no jobs are found
  if (jobs.length === 0) return <div>No jobs found.</div>;

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.jobkey}>  {/* Use jobkey or any unique identifier */}
            <h3>{job.jobtitle}</h3>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer">Apply here</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
