import { TileProps } from "@/components/AAC/Tile";
import { createContext, useContext, useState } from "react";
import React from "react";
import { useTilesProvider } from "./tileProvider";

export interface SimilarityProviderProps {
  children: React.ReactNode;
}

export interface SimilarityState {
  tiles: TileProps[];
  setItems: (items: string[]) => void;
}

const SimilarityContext = createContext<SimilarityState>({
  tiles: [],
  setItems: () => {
    console.log("Inside Default SimilarityContext");
  },
});

export const useSimilarity = () => useContext(SimilarityContext);

export default function SimilarityProvider(props: SimilarityProviderProps) {
  const { flatList } = useTilesProvider();

  // provider state
  const [tiles, setTiles] = useState<TileProps[]>([]);
  const setItems = (items: string[]) => {
    console.log("In similarity provider: " + items);
    setTiles(items.map((item) => flatList[item]).filter((item) => item));
  };

  const value = {
    tiles,
    setItems,
  };

  return (
    <SimilarityContext.Provider value={value}>
      {props.children}
    </SimilarityContext.Provider>
  );
}
