import Film from "../models/Film.js";

class FilmService {
    getFilm = async (filmId) => {
        const film = await Film.findByPk(filmId);
        if (!film) {
            throw new Error("Película no encontrada");
        }
        return film;
    }
}

export default FilmService;
