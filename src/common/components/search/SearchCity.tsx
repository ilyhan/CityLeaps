import Input from "@/common/ui/input/Input"
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import "@/common/components/search/style.scss";
import { ICity } from "@/common/interfaces/city";
import { useDebounce } from "@/common/hooks/useDebounce";
import SearchCityList from "@/common/components/search/SearchCityList";
import { fetchData } from "@/api/api";

interface ISearchCityProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onSetCity: (city?: ICity) => void;
};

const SearchCity = ({ label, onSetCity, ...props }: ISearchCityProps) => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(0);
    const [data, setData] = useState<ICity[]>([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        onSetCity(data[selected]);
    }, [data, selected]);

    const handleSetCity = (ind: number) => {
        setQuery(data[ind].name);
        setSelected(ind);
        setOpen(false);
    };

    const searchCity = async (query: string) => {
        const res = await fetchData(query);

        const cities = res.suggestions.slice(0, 7).map((item) => {
            return {
                name: item.value,
                lat: item.data.geo_lat,
                lon: item.data.geo_lon,
            }
        });

        setData(cities);
        setSelected(0);
    };

    const debounceSearch = useDebounce(searchCity, 400);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        debounceSearch(e.target.value);
    };

    return (
        <div className="search-city__wrapper" >
            <Input
                label={label}
                {...props}
                value={query}
                onChange={handleChange}
                onFocus={() => setOpen(true)}
            />

            {data.length > 0 && open &&
                <SearchCityList
                    data={data}
                    onSetCity={handleSetCity}
                    onOpen={setOpen}
                />
            }
        </div>
    )
};

export default SearchCity;