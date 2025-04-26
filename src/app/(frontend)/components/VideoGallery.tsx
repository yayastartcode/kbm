"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { VideoData } from '../services/payload';

type VideoGalleryProps = {
  videos: VideoData[] | null;
  title?: string;
  subtitle?: string;
  description?: string;
};

export default function VideoGallery({ 
  videos, 
  title = "Recent Work", 
  subtitle = "OUR PORTFOLIO", 
  description = "Explore our recent projects through these video showcases." 
}: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Handle modal open/close
  const openModal = (video: VideoData) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);
  
  // If no videos, don't render the section
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-blue-800 font-medium mb-2 uppercase tracking-wider">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(video)}
            >
              <div className="aspect-video relative overflow-hidden">
                {video.thumbnail?.url ? (
                  <Image 
                    src={video.thumbnail.url}
                    alt={video.title || 'Video thumbnail'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No thumbnail</p>
                  </div>
                )}
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500/80 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Video title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                  {video.client && (
                    <p className="text-white/80 text-sm mt-1">Client: {video.client}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video Modal */}
        {isModalOpen && selectedVideo && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            <div 
              className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Video player */}
              <div className="aspect-video w-full">
                {selectedVideo.videoFile?.url && (
                  <video 
                    ref={videoRef}
                    src={selectedVideo.videoFile.url} 
                    controls 
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              
              {/* Video info */}
              <div className="p-4 bg-black text-white">
                <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                {selectedVideo.description && (
                  <p className="mt-2 text-gray-300">{selectedVideo.description}</p>
                )}
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                  {selectedVideo.client && (
                    <div>
                      <span className="font-semibold">Client:</span> {selectedVideo.client}
                    </div>
                  )}
                  {selectedVideo.completionDate && (
                    <div>
                      <span className="font-semibold">Completed:</span> {new Date(selectedVideo.completionDate).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
