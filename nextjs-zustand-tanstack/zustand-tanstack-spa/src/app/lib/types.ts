export interface Todo
{
    _id?: string;
    id?:number;
    title: string;
    completed?: boolean;
}
export interface Director
{
    _id?: string;
    name:string;
    phoneNo?:string;
}
export interface Movie
{
    _id?: string;
    title:string;
    director:Director;
    year:number;
    genre:string[];
}

export interface Review
{
    _id?: string;
    movie: string;
    rating: number;
    review: string;

}