
export interface ICity {
    name: string;
    lat: number;
    lon: number;
};

export interface ISuggestion {
    value: string;
    data: {
        geo_lat: number;
        geo_lon: number;
    }
};

export interface ICityResponse {
    suggestions: ISuggestion[];
};