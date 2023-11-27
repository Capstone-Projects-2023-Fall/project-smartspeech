import fs from "fs";
import path from "path";

import type { NextApiRequest, NextApiResponse } from "next";

const splitFileByNewLines = (fileContents: string) => fileContents.trim().split(/\s+/);

export interface LoadModelResp {
    dictContents?: string[];
    model?: string;

    error?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<LoadModelResp>) {
    let dictContents: string[] = [];

    try {
        // Get the file path
        const filePath = path.join(process.cwd(), "public", "model_assets", "class_names.txt");

        // Read the file contents
        const fileContents = fs.readFileSync(filePath, "utf-8");

        // process file
        dictContents = splitFileByNewLines(fileContents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error dict text file" });
    }

    res.status(200).json({
        dictContents,
    });
}
