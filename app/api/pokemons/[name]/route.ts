import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import { orderAbility } from "./abilities";


export async function GET(
    request: NextRequest,
    { params }: { params: { name: string } }
) {
    const name: string = params.name

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        const abilities = await orderAbility(response.data?.abilities);

        return NextResponse.json(abilities, { status: 200 })
    } catch (error: any) {
        const errorMessage = error.response?.data || 'Not Found';
        const status = error.response?.status || '404';
        return NextResponse.json({ 'message': errorMessage }, { status: status })

    }

}