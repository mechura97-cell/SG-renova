
export interface Project {
  id: string;
  title: string;
  category: string;
  mainImage: string;
  gallery: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
