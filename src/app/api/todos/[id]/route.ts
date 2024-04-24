import dbConnect from "@/lib/dbConnection";
import TodoModel from "@/model/model";
import { NextResponse } from "next/server";

interface Params{
    id: string;
}

export async function DELETE(request:Request, {params}:{params: Params}){
    await dbConnect();

    const {id} = params;
    await TodoModel.findByIdAndDelete(id)
    return NextResponse.json({message: "Deleted successfully"}, {status: 200})
}

export async function PUT(request:Request, {params}:{params: Params}){
    await dbConnect();

    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await TodoModel.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "Updated succesfully"}, {status: 200});
}