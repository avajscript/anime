"use client";
import { useState } from "react";
import CharacterPreview from "@/app/components/ContentSection/CharacterPreview";
import Search from "@/app/components/search";
import { getCharactersBySearch } from "@/app/lib/fetching";

const Render = ({ dataFetch }) => {
    const [data, setData] = useState(dataFetch);
    const [text, setText] = useState("");

    const searchFunction = async () => {
        const charactersFetch = await getCharactersBySearch({
            page: 1,
            query: text,
        });
        setData(charactersFetch.data.Page);
        return true;
    };

    return (
        <div>
            <Search
                text={text}
                setText={setText}
                searchFunction={searchFunction}
            />
            <CharacterPreview
                data={data.characters}
                pageInfo={data.pageInfo}
                title="Characters"
            />
        </div>
    );
};

export default Render;
