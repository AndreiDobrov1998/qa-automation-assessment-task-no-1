import { getBiggestId } from "../helper/responseBodyTransform"
import { Photo } from "./photo"

export class PhotoBuilder {
    private photo: Photo
    constructor() {
        this.photo = new Photo();
    }

    addId(id: number){
        this.photo.id = id;
        
        return this
    }

    addAlbumId(albumId: number){
        this.photo.albumId = albumId

        return this
    }

    addURL(url: string){
        this.photo.url = url

        return this
    }

    addThumbnailUrl(thumbnailUrl: string){
        this.photo.thumbnailUrl = thumbnailUrl

        return this
    }

    build(){
        return this.photo
    }

}