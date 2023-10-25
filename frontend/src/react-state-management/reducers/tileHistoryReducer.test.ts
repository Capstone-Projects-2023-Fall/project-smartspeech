import { TileProps } from "@/components/AAC/Tile";
import { MAX_TILES_TO_KEEP_IN_MEMORY, TileHistoryReducer, TileHistoryTileProps } from "./tileHistoryReducer";

import { v4 as uuidv4 } from "uuid";
import { blacklist } from "@/data/AAC/Tiles";

// sample data
const greenTile: TileProps = {
    image: "/AAC_assets/img/colors/green.png",
    text: "Green",
    sound: "Green",
    tileColor: "orange",
};

const redTile: TileProps = {
    image: "/AAC_assets/img/colors/red.png",
    text: "Red",
    sound: "Red",
    tileColor: "orange",
};

/**
 * @testDescription
 * Test for TileHistoryReducer
 * This tests adds and removes items using a TileHistoryReducer and checks the integrity of the data:
 *
 *
 * Test Count: 5
 * - `TileHistoryReducer` : Should be able to be cleared
 * - `TileHistoryReducer` : Should be able to add a insert a tile from empty
 * - `TileHistoryReducer` : Should be able to ignore duplicate tiles
 * - `TileHistoryReducer` : Should be able to add a new tile
 * - `TileHistoryReducer` : Should not exceed 'MAX_TILES_TO_KEEP_IN_MEMORY' and rank should be preserved
 */
export const tests = describe("TileHistoryReducer", () => {
    it("Should be able to be cleared", () => {
        const result = TileHistoryReducer([{ ...greenTile, rank: 1 }], { type: "clear" });
        expect(result.length).toBe(0);
    });

    it("Should be able to add a insert a tile", () => {
        const result = TileHistoryReducer([], { type: "add", payload: greenTile });
        expect(result.length).toBe(1);

        const insertedItem = result[0];

        expect(insertedItem.image).toEqual(greenTile.image);
        expect(insertedItem.sound).toEqual(greenTile.sound);
        expect(insertedItem.text).toEqual(greenTile.text);
        expect(insertedItem.tileColor).toEqual(greenTile.tileColor);
    });

    it("Should be able to ignore duplicate tiles", () => {
        const item = { ...greenTile, rank: Date.now() };
        const result = TileHistoryReducer([item], { type: "add", payload: greenTile });

        expect(result.length).toBe(1);
    });

    it("Should be able to add a new value", () => {
        const item = { ...redTile, rank: Date.now() };
        const result = TileHistoryReducer([item], { type: "add", payload: greenTile });

        expect(result.length).toBe(2);

        expect(result[0].text).not.toEqual(result[1].text);
    });

    it("Should not exceed 'MAX_TILES_TO_KEEP_IN_MEMORY' and rank should be preserved", () => {
        const fullArray = new Array<TileHistoryTileProps>();

        // max out the array
        for (let i = 0; i < MAX_TILES_TO_KEEP_IN_MEMORY; i++) {
            fullArray.push({ ...greenTile, text: uuidv4(), rank: i });
        }

        expect(fullArray.length).toBe(MAX_TILES_TO_KEEP_IN_MEMORY);

        // push in new array
        const result = TileHistoryReducer(fullArray, { type: "add", payload: redTile });

        // ensure reducer respects mem limit
        expect(result.length).toBe(MAX_TILES_TO_KEEP_IN_MEMORY);

        // check of sorting function ran and ordering is preserved
        for (let i = 1; i < result.length; i++) {
            expect(result[i - 1].rank).toBeGreaterThanOrEqual(result[i].rank);
        }

        const mostRecentTile = result[0];

        expect({
            image: mostRecentTile.image,
            text: mostRecentTile.text,
            sound: mostRecentTile.sound,
            tileColor: mostRecentTile.tileColor,
        }).toEqual(redTile);
    });

    it("Should not add any blacklisted items", () => {
        blacklist.forEach((tile) => {
            const result = TileHistoryReducer([], { type: "add", payload: tile });
            expect(result.length).toBe(0);
        });
    });
});
