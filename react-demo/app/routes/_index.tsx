import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "React Demo" },
    {
      name: "description",
      content: "React Demo",
    },
  ];
};

export default function Index() {
  return (
    <>
      <div className="h-full p-8">
        <div className="flex flex-col gap-8">
          <div>
            <input
              type="checkbox"
              value="fgdark"
              className="theme-controller toggle"
            />
          </div>
          <div className="flex items-center gap-2 border p-8">
            <img
              alt="Anduril"
              className="h-12 w-12"
              src="https://logo.clearbit.com/anduril.com"
            />
            <button className="btn btn-primary">Button</button>
            <h1 className="font-bold">Anduril Industries</h1>
          </div>
        </div>
      </div>
    </>
  );
}
