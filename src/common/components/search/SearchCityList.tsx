import { ICity } from "@/common/interfaces/city";
import { useEffect, useRef } from "react";
import "@/common/components/search/style.scss";

interface ISearchCityListProps {
    data: ICity[];
    onSetCity: (ind: number) => void;
    onOpen: (isOpen: boolean) => void;
};

const SearchCityList = ({ data, onSetCity, onOpen }: ISearchCityListProps) => {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (listRef.current && !listRef.current.contains(event.target as Node)) {
                onOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <ul ref={listRef} className="search-city__list">
            {data.map((item, index) => (
                <li
                    key={item.name}
                    onClick={() => onSetCity(index)}
                    className="search-city__list-item"
                >
                    {item.name}
                </li>
            ))}
        </ul>
    )
};

export default SearchCityList;