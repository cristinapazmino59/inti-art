import { Artwork } from "./artwork";

export interface ArtworkEvent {
    id: string;
    type: "exhibition" | "workshop" | "auction";
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
    imageUrl?: string;
    artworks: Artwork[];
    createdAt: Date;
    updatedAt: Date;
}