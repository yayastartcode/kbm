// Define our own types for the API responses to avoid type issues

// Footer types
export type FooterData = {
  id?: string | number;
  businessName?: string;
  address?: string;
  phone?: string;
  email?: string;
  copyright?: string;
};

// Client types
export type ClientData = {
  id?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: {
    url: string;
    alt?: string;
  };
};



// Brand types
export type BrandData = {
  id?: string | number;
  name?: string;
  logo?: {
    url: string;
    alt?: string;
  };
  width?: string;
  order?: number;
};

// Video types
export type VideoData = {
  id?: string | number;
  title?: string;
  description?: string;
  videoFile?: {
    url: string;
    alt?: string;
    mimeType?: string;
  };
  thumbnail?: {
    url: string;
    alt?: string;
  };
  featured?: boolean;
  order?: number;
  client?: string;
  completionDate?: string;
};



// AboutUs types
export type AboutUsFeature = {
  id?: string | number;
  feature?: string;
};



export type AboutUsData = {
  id?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  features?: AboutUsFeature[];
  buttonText?: string;
  buttonLink?: string;
  image?: {
    url: string;
    alt?: string;
  };
  visi?: string;
  misi?: string;
  strukturOrganisasiCover?: {
    url: string;
    alt?: string;
  };
  strukturOrganisasiImage?: {
    url: string;
    alt?: string;
  };
};

// Services types
export type ServiceItem = {
  id?: string | number;
  title?: string;
  description?: string;
  icon?: {
    url: string;
    alt?: string;
  };
  link?: string;
  order?: number;
};

export type ServicesData = {
  id?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  serviceItems?: ServiceItem[];
};

// Header types
export type HeaderImage = {
  url: string;
  alt?: string;
  id?: string | number;
};

export type HeaderLogo = {
  image?: HeaderImage;
  text?: string;
  logoIcon?: string;
};

export type HeaderNavItem = {
  id?: string | number;
  label?: string;
  link?: string;
  order?: number;
};

export type HeaderData = {
  id?: string | number;
  logo?: HeaderLogo;
  navigation?: HeaderNavItem[];
};

// Hero types
export type HeroImage = {
  url: string;
  alt?: string;
  id?: string | number;
};

export type HeroSlide = {
  id?: string | number;
  image?: HeroImage;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  order?: number;
};

export type HeroSettings = {
  autoplaySpeed?: number;
  showThumbnails?: boolean;
  showCounter?: boolean;
};

export type HeroData = {
  id?: string | number;
  slides?: HeroSlide[];
  settings?: HeroSettings;
};

// Fetch header data from Payload
export async function getHeader(): Promise<HeaderData | null> {
  try {
    // Get the first header document (we expect only one)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/api/header?limit=1`, {
      next: { 
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch header: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching header data:', error);
    return null;
  }
}

// Fetch about us data from Payload
export async function getAboutUs(): Promise<AboutUsData | null> {
  try {
    // Get the first about-us document (we expect only one)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/api/about-us?limit=1`, {
      next: { 
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch about-us: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching about-us data:', error);
    return null;
  }
}



// Fetch footer data from Payload
export async function getFooter(): Promise<FooterData | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/api/footer?limit=1`, {
      next: { 
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch footer: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return null;
  }
}

// Fetch client data from Payload
export async function getClients(): Promise<ClientData | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/api/clients?limit=1`, {
      next: { 
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch clients: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching clients data:', error);
    return null;
  }
}



// Fetch brands data from Payload
export async function getBrands(): Promise<BrandData[] | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/api/brands?sort=order`, {
      next: { 
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch brands: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching brands data:', error);
    return null;
  }
}

// Fetch videos data from Payload
export async function getVideos(options?: { 
  limit?: number, 
  featured?: boolean
}): Promise<VideoData[] | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    // Build query parameters
    const queryParams = new URLSearchParams();
    
    if (options?.limit) {
      queryParams.append('limit', options.limit.toString());
    }
    
    if (options?.featured) {
      queryParams.append('where[featured][equals]', 'true');
    }
    
    // Add sort parameter
    queryParams.append('sort', 'order');
    
    const response = await fetch(`${apiUrl}/api/videos?${queryParams}`, {
      next: { 
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch videos: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching videos data:', error);
    return null;
  }
}

// Fetch services data from Payload
export async function getServices(): Promise<ServicesData | null> {
  try {
    // Get the first services document (we expect only one)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/api/services?limit=1`, {
      next: { 
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching services data:', error);
    return null;
  }
}

// Fetch hero data from Payload
export async function getHero(): Promise<HeroData | null> {
  try {
    // Get the first hero document (we expect only one)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${apiUrl}/api/hero?limit=1`, {
      next: { 
        revalidate: 60 // Revalidate every 60 seconds
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch hero: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs[0] || null;
  } catch (error) {
    console.error('Error fetching hero data:', error);
    return null;
  }
}
