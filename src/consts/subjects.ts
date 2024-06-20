
export interface Subject{
    id:number
    name:string
    endpoint:string
    short_endpoint?:string
}
export const bookSubjects=<Subject[]>[
{
    id:0,
    name:'All',
    endpoint:"/trending/daily.json",
},
{
    id:1,
    name:'Arts',
    endpoint:"/subjects/Arts.json",
    short_endpoint:"Arts"
},
{
    id:2,
    name:'Animals',
    endpoint:"/subjects/animals.json",
    short_endpoint:"animals"
},
{
    id:3,
    name:'Fiction',
    endpoint:"/subjects/fiction.json",
    short_endpoint:"fiction"
},
{
    id:4,
    name:'Science & Mathematics',
    endpoint:"/subjects/sciencemathematics.json",
    short_endpoint:"sciencemathematics"
},
{
    id:5,
    name:'Business & Finance',
    endpoint:"/subjects/business.json",
    short_endpoint:"business"
},
{
    id:6,
    name:"Children's",
    endpoint:"/subjects/juvenile_fiction.json",
    short_endpoint:"juvenile_fiction"
},
{
    id:7,
    name:'History',
    endpoint:"/subjects/history.json",
    short_endpoint:"history"
},
{
    id:8,
    name:'Health & Wellness',
    endpoint:"/subjects/health.json",
    short_endpoint:"health"
},
{
    id:9,
    name:'Biography',
    endpoint:"/subjects/biography.json",
    short_endpoint:"biography"
},
{
    id:10,
    name:'Social Sciences',
    endpoint:"/subjects/social.json",
    short_endpoint:"social"
},
{
    id:11,
    name:'TextBooks',
    endpoint:"/subjects/textbooks.json",
    short_endpoint:"textbooks"
},
]

