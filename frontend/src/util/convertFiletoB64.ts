const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            const result = fileReader.result as string | null;

            if (!result) return reject("null result");

            const stripped = result.split(",");
            if (stripped.length !== 2) return reject("error with b64 conversion");

            resolve(stripped[1]);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

export default convertBase64;
