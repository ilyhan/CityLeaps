import { ICityResponse } from "@/common/interfaces/city";

const token = import.meta.env.VITE_TOKEN;
const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

export const fetchData = async (query: string): Promise<ICityResponse> => {
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({
            query: query,
            from_bound: { value: "city" },
            to_bound: { value: "city" }
        })
    });

    return res.json();
}