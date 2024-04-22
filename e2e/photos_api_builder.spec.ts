import {test, expect} from "@playwright/test"
import { PhotoBuilder } from "../builders/photoBuilder"


test('Suuccessfull get', async ({ request }) => {
    const response =  await request.get('https://jsonplaceholder.typicode.com/photos/1')
    const photosJson = await response.json()

})

test('Successfull Post with all params', async ({ request }) => {
    const photo = new PhotoBuilder()
                        .addAlbumId(2)
                        .addThumbnailUrl('https://via.placeholder.com/150/771796')
                        .addURL('https://via.placeholder.com/600/771796')
                        .build()
    const response = await request.post('https://jsonplaceholder.typicode.com/photos/',{
        data: photo
    })
    const photoResp = await response.json()

    expect(photoResp.id).toEqual(photo.id)
    expect(response.ok).toBeTruthy()
    expect(response.status()).toBeLessThan(300)
})

test('Successfull Post with no Thumbnail Url', async ({ request }) => {
    const photo = new PhotoBuilder()
                        .addAlbumId(2)
                        .addURL('https://via.placeholder.com/600/771796')
                        .build()
    const response = await request.post('https://jsonplaceholder.typicode.com/photos/',{
        data: photo
    })
    const photoResp = await response.json()

    expect(photoResp.id).toEqual(photo.id)
    expect(response.ok).toBeTruthy()
    expect(response.status()).toBeLessThan(300)
})

test('Successfull Post with no URL', async ({ request }) => {
    const photo = new PhotoBuilder()
                        .addAlbumId(2)
                        .addThumbnailUrl('https://via.placeholder.com/150/771796')
                        .build()
    const response = await request.post('https://jsonplaceholder.typicode.com/photos/',{
        data: photo
    })
    const photoResp = await response.json()

    expect(photoResp.id).toEqual(photo.id)
    expect(response.ok).toBeTruthy()
    expect(response.status()).toBeLessThan(300)
})

test('Successfull Post with no Album and URL', async ({ request }) => {
    const photo = new PhotoBuilder()
                        .addThumbnailUrl('https://via.placeholder.com/150/771796')
                        .build()
    const response = await request.post('https://jsonplaceholder.typicode.com/photos/',{
        data: photo
    })
    const photoResp = await response.json()

    expect(photoResp.id).toEqual(photo.id)
    expect(response.ok).toBeTruthy()
    expect(response.status()).toBeLessThan(300)
})

test('Successfull Post only with Id', async ({ request }) => {
    const photo = new PhotoBuilder()
                        .build()
    const response = await request.post('https://jsonplaceholder.typicode.com/photos/',{
        data: photo
    })
    const photoResp = await response.json()

    expect(photoResp.id).toEqual(photo.id)
    expect(response.ok).toBeTruthy()
    expect(response.status()).toBeLessThan(300)
})

test('Successfull Delete with predefined builded Id', async ({ request }) => {
    const photo = new PhotoBuilder()
                        .build()
    photo.id = 1
    const response = await request.delete('https://jsonplaceholder.typicode.com/photos/' + photo.id)
    const photoResp = await response.json()

    expect(response.ok).toBeTruthy()
    expect(response.status()).toBeLessThan(300)
})

test('404 for Inexistent Photo', async ({ request }) => {
    const photo = new PhotoBuilder()
                        .build()
    const response = await request.get('https://jsonplaceholder.typicode.com/photos/' + photo.id)
    const photoResp = await response.json()

    expect(response.ok).toBeTruthy()
    expect(response.status()).toBe(404)
})