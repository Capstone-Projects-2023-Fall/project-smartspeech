import { TileProps } from "@/components/AAC/Tile";

type TilePropsExtended = TileProps & {
	[key: string]: any;
} 

export function compareTiles(t1: TilePropsExtended, t2: TilePropsExtended){
	return (
		t1.text === t2.text && t1.image === t2.image && t1.tileColor === t2.tileColor && t1.sound === t2.sound
	)
}