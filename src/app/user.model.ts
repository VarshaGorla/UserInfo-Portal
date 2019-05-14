export interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}
export interface User {
    id: number;
    name : string;
    address: {
        [key: string]: Address;
    };
}

export class Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export class Album {
    userId: number;
    id: number;
    title: string;
}