import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<void> = {
  GET(req: Request, ctx) {
    console.log(req.url)
    return ctx.render();
  },
};



export default function Write() {
  return (
      <div id="area">
        <p><a href={"/"}>takaasin kotiin</a></p>
        <form method="GET">
          <label for="desc">Kuvaus tehdystä työstä</label>
          <br/>
          <input type="text" name="desc" />
          <br/>
          <label for="amount">Paljos teit töitä</label>
          <br/>
          <input id="amount" type="number" name="amount" min={0}/>
          <br/>
          <button type="submit">Tallenna</button>
        </form>
        <p>Paina k-näppäintä nostaaksesi tykkiä ja välilyöntiä ampuaksesi</p>
        <div>
            <canvas id="canvas" width="288" height="512"></canvas>
        </div>
        <script src="game.js"></script>
        <script>
            startGame();
        </script>
      </div>
  );
}
