export const getColorsList = () => JSON.parse(localStorage.getItem("colors")) || [];

export const getLastColor = () => {
    const listColor = getColorsList();

    return listColor[0] || "#000000";
}

