// chessService.js
import axios from "axios";

// Configure the base URL to your Java API
const CHESS_API_BASE_URL = process.env.CHESS_API_BASE_URL || 'http://localhost:8080/chess';

export default function ChessRoutes(app) {

    const getAllGames = async(req, res) => {
        try {
            const response = await axios.get(CHESS_API_BASE_URL);
            res.json(response.data);
          } catch (error) {
            console.error('Error fetching games:', error.message);
            throw error;
          }
    }

    const getGameById = async(req, res) => {
      const { id } = req.params;
      try {
        const response = await axios.get(`${CHESS_API_BASE_URL}/${id}`);
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching game:', error.message);
        throw error;
      }
    }

    const createGame = async(req, res) => {
      try {
        const response = await axios.post(CHESS_API_BASE_URL);
        res.json(response.data);
      } catch (error) {
        console.error('Error creating game:', error.message);
        throw error 
      }
    }

    const makeMove = async(req, res) => {
      const { id } = req.params;
      try {
        const response = await axios.put(`${CHESS_API_BASE_URL}/${id}/move`, req.body);
        res.json(response.data);
      } catch (error) {
        console.error('Error making move:', error.message);
        throw error;
      }
    }

    const deleteGame = async(req, res) => {
      const { id } = req.params;
      try {
        const response = await axios.delete(`${CHESS_API_BASE_URL}/${id}`);
        res.json(response.data);
      }
      catch (error) {
        console.error('Error deleting game:', error.message);
        throw error;
      }
    }

    app.get("/chess", getAllGames);
    app.get("/chess/:id", getGameById);
    app.post("/chess", createGame);
    app.put("/chess/:id/move", makeMove);
    app.delete("/chess/:id", deleteGame);
}