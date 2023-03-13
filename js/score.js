

export async function getRanking(entries) {
    try {
        let response = await axios.get(`https://pacman-backend-production.up.railway.app/ranking/${entries}`);
        return response.data

    } catch (error) {
        console.error(error);
    }
}

export async function insertNewScore(name, score) {
    let newBody = {
        name: name,
        score: parseInt(score)
    }
    try {
        await axios.post(`https://pacman-backend-production.up.railway.app/ranking`, newBody)

    } catch (error) {
        console.error(error);
    }
}