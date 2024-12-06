import React, { useState, useEffect } from "react";
import axios from "axios";

function JobList() {
  const [jobs, setJobs] = useState([]);  // State to hold job data
  const [loading, setLoading] = useState(true);  // State to handle loading state
  const [error, setError] = useState("");  // State to handle errors

  // Fetch job data when the component mounts
  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await axios.get(
          "https://indeed.p.rapidapi.com/ads/apisearch",
          {
            params: {
              v: "2",
              format: "json",
              q: "java",
              l: "austin, tx",
              radius: "25",
            },
            headers: {
              "X-RapidAPI-Host": "indeed.p.rapidapi.com",
              "X-RapidAPI-Key": "YOUR_API_KEY",  // Replace with your RapidAPI Key
            },
          }
        );
        setJobs(response.data.results);  // Set the job data into state
      } catch (err) {
        setError("Error fetching jobs data");  // Handle errors
      } finally {
        setLoading(false);  // Turn off loading
      }
    }

    fetchJobs();  // Call the fetchJobs function
  }, []);  // Empty dependency array means this runs once when the component mounts

  // Display loading or error message if necessary
  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.jobkey}>
            <h2>{job.jobtitle}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.snippet}</p>
            <a href={`https://www.indeed.com/viewjob?jk=${job.jobkey}`} target="_blank" rel="noopener noreferrer">
              View Job
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
