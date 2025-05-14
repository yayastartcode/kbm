import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';

import BrandSection from './components/BrandSection';
import VideoGallery from './components/VideoGallery';
import ClientSection from './components/ClientSection';
import MapSection from './components/MapSection';
import { getHeader, getHero, getAboutUs, getServices, getBrands, getVideos, getClients, getFooter } from './services/payload';

export default async function HomePage() {
  // Fetch all data from Payload collections
  const header = await getHeader();
  const hero = await getHero();
  const aboutUs = await getAboutUs();
  const services = await getServices();

  const brands = await getBrands();
  const videos = await getVideos({ limit:20, featured: true });
  const clientData = await getClients();
  const footer = await getFooter();
  
  return (
    <main className="bg-white min-h-screen font-sans">
      {/* Header Section */}
      <Header header={header} />

      {/* Hero Section with Slider */}
      <Hero hero={hero} />

      {/* About Us Section */}
      <AboutUs aboutUs={aboutUs} />

      {/* Our Services Section */}
      <OurServices services={services} />

      {/* Video Gallery Section */}
      <VideoGallery videos={videos} />


      
      {/* Client Section */}
      <ClientSection clientData={clientData} />
      
      {/* Map Section */}
      <MapSection footer={footer} />
  
    </main>
  );
}
