import convertBase64 from "@/util/convertFiletoB64";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function AddCustomTile() {
    const textRef = useRef<HTMLInputElement>(null);
    const soundRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (!files || files.length === 0) return;

        const mainFile = files[0];

        setFile(mainFile);
        console.log(mainFile);
    };

    const handleUploadTile = async (e: FormEvent) => {
        e.preventDefault();

        const text = textRef.current?.value;
        const sound = textRef.current?.value;

        if (!file || !text || !sound) return;

        try {
            const b64File = await convertBase64(file);

            console.log(b64File);
        } catch (error) {}
    };

    return (
        <section className="px-6 max-w-3xl mx-auto">
            <h2 className="font-semibold text-2xl border-b-2 ">Add Custom Tiles</h2>

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
                    <div>
                        <label htmlFor="tile_sound" className="block mb-2 text-sm font-medium text-gray-900">
                            Image to accompany tile:
                        </label>
                        <input type="file" id="tile_image" required onChange={handleFileUpload} />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
