import { convertBase64, getFileNameWithExt } from "@/util/fileOps";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { tileColors } from "../AAC/Tile";
import { useSession } from "next-auth/react";
import uploadTileData from "@/util/CustomTile/uploadTileData";
import { useTilesProvider } from "@/react-state-management/providers/tileProvider";
import { CustomTilesCardLoadingSpinner } from "../util/LoadingSpinner";

type CTFileData = {
    b64: null | string;
    fileName: null | string;
    extension: null | string;
};

export default function AddCustomTile() {
    const textRef = useRef<HTMLInputElement>(null);
    const soundRef = useRef<HTMLInputElement>(null);
    const colorRef = useRef<HTMLSelectElement>(null);
    const [file, setFile] = useState<File | null>(null);

    const [isUploading, setIsUploading] = useState(false);

    const { data: session } = useSession();
    const { triggerRefreshCustomTiles, customTiles } = useTilesProvider();

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (!files || files.length === 0) return;

        const mainFile = files[0];

        setFile(mainFile);
    };

    const handleUploadTileLogic = async () => {
        const email = session?.user?.email;

        if (!email) return;

        const text = textRef.current?.value;
        const sound = soundRef.current?.value;
        const tileColor = colorRef.current?.value;

        if (!file || !text || !sound || !tileColor) return;

        const fileData: CTFileData = {
            b64: null,
            fileName: null,
            extension: null,
        };

        fileData.b64 = (await convertBase64(file)) as string;
        const { fileName, extension } = getFileNameWithExt(file);

        fileData.fileName = fileName;
        fileData.extension = extension;

        const resp = await uploadTileData({
            email,
            text,
            sound,
            tileColor,
            image: fileData.b64,
            imageExt: fileData.extension,
        });

        if (resp && "imageUrl" in resp) triggerRefreshCustomTiles();
    };

    const handleUploadTile = async (e: FormEvent) => {
        e.preventDefault();

        setIsUploading(true);
        try {
            await handleUploadTileLogic();
        } catch (error) {
            console.error(error);
        }
        setIsUploading(false);
    };

    return (
        <section className="px-6 mb-10 max-w-3xl mx-auto">
            <h2 className="font-semibold text-2xl border-b-2 ">Add Custom Tiles</h2>
            <small className="text-sm">
                Custom Tiles on <strong>{session?.user?.email ? `${session?.user?.email}'s` : "Your"}</strong> account are above.
                <br />
                You have <strong>{customTiles.length}</strong> custom tiles.
            </small>

            <form className="mt-6" onSubmit={handleUploadTile}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="tile_text" className="block mb-2 text-sm font-medium text-gray-900">
                            Text to accompany tile:
                        </label>
                        <input
                            ref={textRef}
                            type="text"
                            id="tile_text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Keep this short, Ex: 'Headphones or Wallet'"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="tile_sound" className="block mb-2 text-sm font-medium text-gray-900">
                            Sound to accompany tile:
                        </label>
                        <input
                            ref={soundRef}
                            type="text"
                            id="tile_sound"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="What should be played when tile is pressed."
                            required
                        />
                    </div>
                    <label htmlFor="tile_color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select Your tile color:
                    </label>
                    <select
                        id="tile_color"
                        ref={colorRef}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    >
                        <option value={""}>{""}</option>
                        {tileColors.map((color) => (
                            <option value={color} key={color}>
                                {color.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    <div>
                        <label htmlFor="tile_sound" className="block mb-2 text-sm font-medium text-gray-900">
                            Image to accompany tile:
                        </label>
                        <input type="file" id="tile_image" required onChange={handleFileUpload} />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-30 disabled:bg-gray-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    disabled={isUploading}
                >
                    {isUploading ? <CustomTilesCardLoadingSpinner /> : "Submit Tile"}
                </button>
            </form>
        </section>
    );
}
