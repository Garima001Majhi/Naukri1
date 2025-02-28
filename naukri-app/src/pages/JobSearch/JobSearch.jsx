import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Card, CardContent } from "@mui/material";
import { BsBuildings } from "react-icons/bs";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { PiTargetFill } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import Footer from "../../components/Footer/Footer";
import FetchData from "../../api/FetchData";
import "./JobSearch.css";

const JobSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    role: 'Frontend',
    experience: 'Fresher (Less than 1 year)',
    location: 'Enter location'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSearchClick = () => {
    // Update the search query based on the filter values
    setSearchQuery(filters);
  };

  return (
    <Box className="job-search-container">
      {/* Hero Section */}
      <Box className="hero-section">
        <Typography variant="h4" className="hero-title">
          Find your dream job now
        </Typography>
        <Typography variant="body1" className="hero-subtitle">
          5 lakh+ jobs for you to explore
        </Typography>
        <Box className="search-bar">
          <TextField
            variant="outlined"
            placeholder="Frontend"
            name="role"
            value={filters.role}
            onChange={handleInputChange}
            className="search-input"
          />
          <TextField
            variant="outlined"
            placeholder="Fresher (Less than 1 year)"
            name="experience"
            value={filters.experience}
            onChange={handleInputChange}
            className="search-input"
          />
          <TextField
            variant="outlined"
            placeholder="Enter location"
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            className="search-input"
          />
          <Button variant="contained" className="search-button" onClick={handleSearchClick}>
            Search
          </Button>
        </Box>
        
        {/* Fetching and rendering data */}
        <FetchData searchQuery={searchQuery} />
      </Box>

      {/* Promotion Section */}
      <Box className="promotion-section">
        <Typography variant="h6" className="promotion-title">
          Increase your chances of hiring by almost 60%
        </Typography>
        <Typography variant="body2" className="promotion-subtitle">
          More than 25000 companies are hiring by directly searching for candidates on Naukri!
        </Typography>
        <Button variant="contained" className="promotion-button">
          Register Now
        </Button>
      </Box>

      {/* Trending Section */}
      <Box className="trending-section">
        <Typography variant="h5" className="trending-title">
          Trending on Naukri Today
        </Typography>
        <Grid container spacing={3} className="trending-grid">
          {[ 
            { title: "Remote", jobs: "6.4k+ Jobs", icon: <BsBuildings /> },
            { title: "MNC", jobs: "61.4k+ Jobs", icon: <PiBuildingOfficeFill /> },
            { title: "Project Mgmt", jobs: "5.3k+ Jobs", icon: <PiTargetFill /> },
            { title: "Fortune 500", jobs: "22k+ Jobs", icon: <IoPeople /> },
            { title: "Software & IT", jobs: "35.2k+ Jobs", icon: <HiComputerDesktop /> },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="trending-card">
                <CardContent>
                  <Box className="card-icon">{item.icon}</Box>
                  <Typography variant="h6" className="card-title">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="card-subtitle">
                    {item.jobs}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default JobSearch;
