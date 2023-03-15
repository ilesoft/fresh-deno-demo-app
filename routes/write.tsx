import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<void> = {
  GET(req: Request, ctx) {
    console.log(req)
    return ctx.render();
  },
};

export default function Page() {
  return (
      <div>
        <p><a href={"/"}>takaasin kotiin</a></p>
        <form method="GET">
          <label for="desc">Kuvaus tehdystä työstä</label>
          <input type="text" name="desc" />
          <br/>
          <label for="amount">Paljos teit töitä</label>
          <br/>
          <input type="number" name="amount" min={0} step={0.1}/>
          <br/>
          <button type="submit">Tallenna</button>
        </form>
      </div>
  );
}
