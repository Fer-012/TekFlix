export class Film {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: string;
    year: number;
    genre: string;
    isNew: number;
    trailerUrl?: string;
     
    constructor(id: number, title: string, description: string, image: string, rating: string, year: number, genre: string, isNew: number, trailerUrl?: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.year = year;
        this.genre = genre;
        this.isNew = isNew;
        this.trailerUrl = trailerUrl;
    }
}

export const FILMS: Film[] = [
    {
        id: 1,
        title: 'Deadpool',
        description: 'A wisecracking mercenary with accelerated healing powers seeks revenge against the man who experimented on him and left him disfigured.',
        image: '/pool.webp',
        rating: '8.0',
        year: 2016,
        genre: 'Action',
        isNew: 0,
        trailerUrl: 'https://www.youtube.com/watch?v=73_1biulkYk'
    },
    {
        id: 2,
        title: 'Venom',
        description: 'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.',
        image: '/venom.webp',
        rating: '6.7',
        year: 2018,
        genre: 'Action',
        isNew: 1,
        trailerUrl: 'https://www.youtube.com/watch?v=__2bjWbetsA'
    },
    {
        id: 3,
        title: 'Naruto Shippuden',
        description: 'Naruto Uzumaki is tasked with protecting a priestess who can seal away a powerful demon, but she has a prophecy that he will die in battle.',
        image: '/naruto.jpg',
        rating: '7.0',
        year: 2007,
        genre: 'Anime',
        isNew: 0,
        trailerUrl: 'https://www.youtube.com/watch?v=2upuBiEiXDk'
    },
    {
        id: 4,
        title: 'White Chicks',
        description: 'Two disgraced FBI agents go undercover as white socialites to solve a kidnapping case.',
        image: '/white.jpg',
        rating: '5.7',
        year: 2004,
        genre: 'Comedy',
        isNew: 1,
        trailerUrl: 'https://www.youtube.com/watch?v=ywgFa00pG7s'
    }
];
