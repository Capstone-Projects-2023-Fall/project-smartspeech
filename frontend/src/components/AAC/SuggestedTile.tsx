import React, { useEffect, useReducer, useState } from "react";
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { getAACAssets } from "../../util/AAC/getAACAssets";
import Tile from "./Tile";
import { TileAssets } from "./TileTypes";
import { mockSuggestedTileData } from "@/data/AAC/Tiles";
import { useRekognition } from "@/react-state-management/providers/useRekognition";

/**
 *
 * @returns Component which will fetch tiles and display them based on what is drawn
 * currently using AACAssets dataset
 * update later to add logic for what is drawn on Canvas
 */
export default function SuggestedTiles() {
    // State to store tile data and current location
    const { items } = useRekognition();
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async() => {
        try{
            const responce = await fetch('http://localhost:3000/similarity',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                //might need to make it bigger
                body: JSON.stringify({words: ['fruit', 'apple', 'orange']})
            });
            if(responce.ok){
                //parsing through backend JSON
                const data = await responce.json();
                setSuggestions(data.suggestions);
            } else {
                console.error('Request fail');
            }
        } catch (error){
            console.error('Error:', error);
        }
    }
    
    return (
        <>
            <h1 className="tilesHeaderFont">Suggested Tiles</h1>
            <div className="flex flex-cols-8 gap-6" data-testid="tiles-container">
                {(items ?? []).map((item, i) => {
                    const { image, text, sound, tileColor } = item;
                    return <Tile image={image} text={text} sound={sound} tileColor={tileColor} key={`${item.text}-${i}`} />;
                })}
            </div>
            
            <div className="flex flex-cols-8 gap-6" data-testid="drawling-suggestion">
                
            </div>
        </>
    );
}
