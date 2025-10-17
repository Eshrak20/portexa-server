export interface IBlog {
    title: string;
    slug: string;
    content: string;
    thumbnail: string;
    category: string[]; // PostgreSQL TEXT[] or JSON
    tags: string[];     // PostgreSQL TEXT[] or JSON
    status: 'draft' | 'published' | 'archived';
    _id?: number; // or string if using UUID
    read_time?: string;
    views?: number;
    likes?: number;
    created_at?: Date;
    updated_at?: Date;
}
