"use client";

import React from 'react';
import Image from 'next/image';
import { AboutUsData } from '../services/payload';

type AboutUsProps = {
  aboutUs?: AboutUsData | null;
};

export default function AboutUs({ aboutUs }: AboutUsProps) {
  // Default values if no data is provided from Payload
  const title = aboutUs?.title || "We are leaders in the building sector";
  const subtitle = aboutUs?.subtitle || "WHO WE ARE";
  const description = aboutUs?.description || "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.";
  const buttonText = aboutUs?.buttonText || "About Us";
  const buttonLink = aboutUs?.buttonLink || "/about";
  const imageSrc = aboutUs?.image?.url || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
  
  // Extract features from Payload data or use defaults
  const features = aboutUs?.features?.map(item => item.feature) || [
    "Individual approach",
    "Technical architecture",
    "Customer support"
  ];
  
  // Visi & Misi data
  const visi = aboutUs?.visi || "Menjadi perusahaan kontraktor dan supplier terkemuka yang dikenal karena kualitas, integritas, dan inovasi dalam setiap proyek yang kami tangani.";
  const defaultMisi = "- Memberikan layanan berkualitas tinggi dengan standar keamanan dan profesionalisme terbaik\n- Mengembangkan hubungan jangka panjang dengan klien melalui kepercayaan dan hasil kerja yang memuaskan\n- Menerapkan teknologi dan metode terkini untuk meningkatkan efisiensi dan kualitas pekerjaan\n- Berkontribusi positif terhadap masyarakat dan lingkungan dalam setiap proyek yang kami kerjakan";
  const misiText = aboutUs?.misi || defaultMisi;
  const misiPoints = misiText.split('\n').filter(line => line.trim().length > 0).map(line => line.trim().replace(/^-\s*/, ''));
  
  // Struktur Organisasi data
  const strukturOrganisasiCoverSrc = aboutUs?.strukturOrganisasiCover?.url || "/struktur-organisasi-cover.jpg";
  const strukturOrganisasiImageSrc = aboutUs?.strukturOrganisasiImage?.url || "/struktur-organisasi.jpg";
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[500px] md:h-[600px]">
              <Image 
                src={imageSrc}
                alt="Professional in hard hat with tablet"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="max-w-xl">
              <p className="text-blue-800 font-medium mb-4 uppercase tracking-wider">{subtitle}</p>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">{title}</h2>
              <p className="text-gray-600 mb-8 text-lg">{description}</p>
              
              {/* Feature List */}
              <ul className="mb-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a 
                href={buttonLink}
                className="inline-block bg-purple-500 text-white px-8 py-3 font-medium hover:bg-purple-600 transition rounded-md"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
        
        {/* Visi & Misi Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Visi & Misi</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Visi Card */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Visi
              </h3>
              <p className="text-gray-600 leading-relaxed">{visi}</p>
            </div>
            
            {/* Misi Card */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Misi
              </h3>
              <ul className="space-y-3">
                {misiPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">•</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Struktur Organisasi Section */}
        <div className="mt-24">
          {/* Cover Image with Title */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-16">
            {strukturOrganisasiCoverSrc && (
              <Image 
                src={strukturOrganisasiCoverSrc}
                alt="Struktur Organisasi Cover"
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 to-purple-900/80 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">STRUKTUR ORGANISASI</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white">PERUSAHAAN</h3>
              <div className="w-24 h-1 bg-orange-500 mt-6"></div>
            </div>
          </div>
          
          {/* Organizational Structure Image */}
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              {strukturOrganisasiImageSrc && (
                <Image 
                  src={strukturOrganisasiImageSrc}
                  alt="Struktur Organisasi"
                  width={1000}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
