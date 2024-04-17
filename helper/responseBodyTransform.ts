import { Photo } from "../dto/photos.dto";

export function filterByAlbumNumber(photos: Array<Photo>, albumId: number) {
    return photos.filter((photos: Photo) => photos.albumId === 100)
}

export function filterByTitleInclude(photos: Array<Photo>, text: string){
    photos.filter((photos: Photo) => photos.title.includes(text) )
}