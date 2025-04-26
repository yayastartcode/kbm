"use client";

import React from 'react';
import { FooterData } from '../services/payload';

type MapSectionProps = {
  footer?: FooterData | null;
  mapLocation?: string;
};

export default function MapSection({ 
  footer,
  mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.422809832683!2d106.84216547692861!3d-6.207829493779994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4725c5ef0fb%3A0x96cf4e98a5335607!2sJl.%20Menteng%20Tenggulun%2020-26%2C%20RT.11%2FRW.1%2C%20Menteng%2C%20Kec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010310!5e0!3m2!1sen!2sid!4v1745634502360!5m2!1sen!2sid"
}: MapSectionProps) {
  const businessName = footer?.businessName || "PT Kharisma Baja Mandiri";
  const address = footer?.address || "Jl. Jend. Gatot Subroto, Jakarta Selatan, DKI Jakarta";
  const phone = footer?.phone || "+62 21 123456789";
  const email = footer?.email || "info@kharismabajamandiri.com";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Location</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our office or contact us for more information about our services.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map */}
          <div className="w-full lg:w-2/3">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
              <iframe 
                src={mapLocation}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-2">{businessName}</h3>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            </div>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy-900 mb-1">Address</h4>
                  <p className="text-gray-600">{address}</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy-900 mb-1">Phone</h4>
                  <p className="text-gray-600">{phone}</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy-900 mb-1">Email</h4>
                  <p className="text-gray-600">{email}</p>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-navy-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
