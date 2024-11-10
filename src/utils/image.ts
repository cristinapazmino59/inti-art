export const getImageDimensions = (
    file: File
): Promise<{width: number, height: number}> => {
    return new Promise ((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height,
            });
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
    });
};

export const resizeImage = async (
    file: File,
    maxWidth: number,
    maxHeight: number,
): Promise<Blob> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > maxWidth) {
                    height = height*(maxWidth/width);
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    height = maxHeight;
                    width = width*(maxHeight/height);
                }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, width, height);

            canvas.toBlob((blob) => {
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error("Failed to resize image"));
                }
            }, file.type);
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
    });
};