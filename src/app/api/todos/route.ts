import dbConnect from "@/lib/dbConnection";
import TodoModel from "@/model/model";
import { NextResponse } from "next/server";


export async function POST( request: Request){
    await dbConnect();

    const {title, description} = await request.json();
    await TodoModel.create({title, description});
    return NextResponse.json({message: "Todo created successfully"}, {status: 201});
}

export async function GET() {
    await dbConnect();

    const todos = await TodoModel.find();
    return NextResponse.json({todos});
}