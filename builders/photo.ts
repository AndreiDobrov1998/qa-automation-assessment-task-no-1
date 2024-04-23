import { getBiggestId } from "../helper/responseBodyTransform";

export class Photo {
    id: number;
    albumId?: number;
    url?: string;
    thumbnailUrl?: string;

    constructor() {
    }
}