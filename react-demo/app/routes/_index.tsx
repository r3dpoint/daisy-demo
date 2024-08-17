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
          <div className="flex flex-row justify-between border p-8">
            <div className="flex items-center gap-1">
              <img
                alt="Anduril"
                className="h-10 w-10"
                src="https://logo.clearbit.com/anduril.com"
              />
              <h2 className="text-3xl font-normal">Anduril Industries IPO</h2>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-primary h-8 w-20">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
