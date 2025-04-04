# api.lucferrara.com

Current Endpoints: 
<h1>/Chess</h1>
<p>This endpoint allows the user to play chess games. This is integrated with the LUChess API, found here: <a>https://github.com/LucF120/LUChess/tree/api</a></p>
<ul>
<li>GET /Chess</li> <p>Lists active chess games</p>
<li>POST /Chess</li> <p>Creates a new chess game</p>
<li>GET /Chess/:id</li> <p>Shows the details of a specific chess game</p>
<li>PUT /Chess/:id/move</li> <p>Allows the user to make a move. Body must 
be JSON encoded with a "from" and "to" location. Ex: {"from": "e2", "to": "e4"}
<li>DELETE /Chess/:id</li> <p>Deletes a chess game</p>
</ul>
<p>The /Chess endpoint is a work in progress. Features to be added:</p>
<ul>
<li>Store games in DB</li>
<li>Clean up body data - lots of unnecessary information</li>
<li>Integrate with lucferrara.com/chess</li>
</ul>
