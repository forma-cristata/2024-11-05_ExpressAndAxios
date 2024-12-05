/**
 * Kaci Craycraft
 * kcraycraft45
 */

import axios, {isCancel, AxiosError} from 'axios';
import express from 'express';
const app = express();

app.get('/joke', async (req, res)=>
{
    try
    {
        await axios.get('https://official-joke-api.appspot.com/random_joke')
            .then(function(response)
            {
                const joke = response.data;
                console.log(joke.setup);
                console.log(joke.punchline);
                res.send(`<h1>${joke.setup}</h1><h3>${joke.punchline}</h3>`);
            });

    }
    catch
    {
        console.log("ERROR");
    }
});
app.use(express.static('public'));
app.listen(3000, () =>
{
   console.log("Server is listening on port 3000");
   console.log("http://localhost:3000/joke');");
});