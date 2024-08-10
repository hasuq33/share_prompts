import { title } from "process";


// Url Shoud be localhost:3000/api/users
export async function GET(request:any){
    const users = [
        {id:1, name: "John"}, 
        {id:2, name: "Jane"},
        {id:3, name: "Bob"}
    ]
    return new Response(JSON.stringify(users));
}

export async function HEAD(request:string){

}

export async function POST(request:string){}

export async function PUT(request:string){}

export async function DELETE(request:string){}

// IF you want to generate a metadata you can do like this
// this metadata will generate when this page is rendered or api called 
export const metadata = {
    title:"Home",
}

