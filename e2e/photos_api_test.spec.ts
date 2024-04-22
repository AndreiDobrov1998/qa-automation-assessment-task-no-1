import {test, expect} from "@playwright/test"
import { PhotoOld } from "../dto/photo.dto"
import { filterByAlbumNumber, filterByTitleInclude, getBiggestId } from "../helper/responseBodyTransform"


test('Asert Success of Photos API', async ({ request }) => {
    // make get request
    const response =  await request.get('https://jsonplaceholder.typicode.com/photos')
    //assign response type Json to a variable
    const photosJson = await response.json()
    //Define a variable that will store array of objects that was assigned from Json
    let photos = Object.assign(new Array<PhotoOld>, photosJson)

    //Expect 200
    expect(response.ok()).toBeTruthy()
    //Expect response body > 0
    expect(photos.length).toBeGreaterThan(0)

    //Expect Title to be equal
    expect(photos.some((photo: PhotoOld) => {
         return photo.title === 'reprehenderit est deserunt velit ipsam'
    })).toBeTruthy()

    //Filter array of objects by albumId
    //console.log(filterByAlbumNumber(photos, 100))

    //Filter array of objects by Title contains string
    //console.log(filterByTitleInclude(photos, 'error'))
})