const work = [{amount: 2, desc: "töi"}, {amount: 42, desc: "paljon töi"}];

export default function List() {
  return (
      <div>
        <p><a href={"/"}>takaasin kotiin</a></p>
        <ul>
          {work.map((x => {
            return <li><span style="padding-right: 2em;">{x.amount}</span>{x.desc}</li>
          }))}
        </ul>
      </div>
  );
}
