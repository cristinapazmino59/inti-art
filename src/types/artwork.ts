type ArtworkCategory =
    | "realism"
    | "abstract"
    | "portrait"
    | "watercolor"
    | "pet-portrait";

export interface Artwork {
    id: string;
    title: string;
    description?: string;
    price: number;
    dimensions: {
        width: number;
        height: number;
        unit: "cm" | "in";
    };
    technique: string;
    category: ArtworkCategory;
    imageUrl: string;
    aditionalImages: string[];
    available: boolean;
    estimatedProductionDays: number;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ArtworkFilters {
    category?: ArtworkCategory;
    minPrice?: number;
    maxPrice?: number;
    technique?: string;
    search?: string;
}