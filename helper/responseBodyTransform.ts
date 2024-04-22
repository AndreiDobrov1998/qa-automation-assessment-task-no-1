import { request } from "@playwright/test";
import { PhotoOld } from "../dto/photo.dto";
import {test, expect} from "@playwright/test"


export function filterByAlbumNumber(photos: Array<PhotoOld>, albumId: number) {
    return photos.filter((photos: PhotoOld) => photos.albumId === 100)
}

export function filterByTitleInclude(photos: Array<PhotoOld>, text: string){
    photos.filter((photos: PhotoOld) => photos.title.includes(text) )
}

export async function getBiggestId(){
    const photoRes = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    let photos = Object.assign(new Array<PhotoOld>, photoRes)
    let biggestID
    photos.forEach(element => {
        if(element.id>biggestID || !biggestID){
            biggestID = element.id
        }
    });
    
    return biggestID
}