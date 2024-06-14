
export interface Subject{
    id:number
    name:string
    endpoint:string
}
export const bookSubjects=<Subject[]>[
{
    id:0,
    name:'All',
    endpoint:"/trending/daily.json"
},
{
    id:1,
    name:'Arts',
    endpoint:"/subjects/Arts.json"
},
{
    id:2,
    name:'Animals',
    endpoint:"/subjects/animals.json"
},
{
    id:3,
    name:'Fiction',
    endpoint:"/subjects/fiction.json"
},
{
    id:4,
    name:'Science & Mathematics',
    endpoint:"/subjects/sciencemathematics.json"
},
{
    id:5,
    name:'Business & Finance',
    endpoint:"/subjects/business.json"
},
{
    id:6,
    name:"Children's",
    endpoint:"/subjects/juvenile_fiction.json"
},
{
    id:7,
    name:'History',
    endpoint:"/subjects/history.json"
},
{
    id:8,
    name:'Health & Wellness',
    endpoint:"/subjects/health.json"
},
{
    id:9,
    name:'Biography',
    endpoint:"/subjects/biography.json"
},
{
    id:10,
    name:'Social Sciences',
    endpoint:"/subjects/social.json"
},
{
    id:11,
    name:'TextBooks',
    endpoint:"/subjects/textbooks.json"
},
]

