// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image structure returned by Cosmic file metafields
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Skill object
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name?: string;
    category?: string;
    proficiency?: number;
    icon?: string;
  };
}

// Project object
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title?: string;
    description?: string;
    screenshots?: CosmicImage[];
    tech_stack?: string;
    live_url?: string;
    github_url?: string;
    featured?: boolean;
    completion_date?: string;
  };
}

// Work Experience object
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company?: string;
    role?: string;
    company_logo?: CosmicImage;
    start_date?: string;
    current_position?: boolean;
    end_date?: string;
    description?: string;
  };
}

// Profile object
export interface Profile extends CosmicObject {
  type: 'profile';
  metadata: {
    name?: string;
    tagline?: string;
    bio?: string;
    profile_photo?: CosmicImage;
    email?: string;
    location?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

// Cosmic list response
export interface CosmicListResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}