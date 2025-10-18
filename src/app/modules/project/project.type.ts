export interface IProject {
    title: string;
    slug: string;
    short_description: string;
    description: string;
    features: string[]; 
    technologies: string[];   
    thumbnail: string;    
    screenshots: string;     
    video_link: string;     
    github_link: string;     
    category: string;     
    live_link: string;     
    status: 'draft' | 'published' | 'archived';
    is_featured: boolean;     
    views?: string;
    created_at?: Date;
    updated_at?: Date;
}