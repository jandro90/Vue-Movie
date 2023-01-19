const useShow = () => {
    const getRate = (rate) => (rate ? Math.round(rate * 100) / 10 : "-");

    const getImage = (img) =>
        img
            ? img
            : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";

    const getLang = (lang) => (lang ? lang : "-");

    const getDays = (days) => (days ? days.join(",") : "-");

    const getName = (name) => (name ? name : "-");

    const getGenres = (genres) => (genres ? genres.join(",") : "-");

    const getTime = (time) => (time ? time : "-");

    return {
        getRate,
        getImage,
        getLang,
        getDays,
        getName,
        getGenres,
        getTime,
    };
};

export default useShow;
