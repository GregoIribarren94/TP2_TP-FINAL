import FilmService from "../services/FilmService.js";

class FilmController {

  favFilm = async (req, res) => {
    try {
        const { filmId } = req.params;
        const userId = req.user.id; // Suponiendo que el middleware de autenticación agrega el usuario al request

        await this.filmService.addFavoriteFilm(userId, filmId);

        return res.status(200).json({
            success: true,
            message: "Película agregada a favoritos",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
  };

}