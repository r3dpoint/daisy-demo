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
          <div className="flex flex-col gap-8 border p-8">
            <div className="breadcrumbs text-xs">
              <ul>
                <li>
                  <a>Companies</a>
                </li>
                <li>Anduril Industries</li>
              </ul>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex items-center gap-1">
                <img
                  alt="Anduril"
                  className="h-10 w-10"
                  src="https://logo.clearbit.com/anduril.com"
                />
                <h2 className="text-3xl font-normal">Anduril Industries</h2>
              </div>
              <div className="flex justify-end">
                <button className="btn btn-primary h-8 w-20">Buy</button>
              </div>
            </div>
            <div className="flex flex-row">
              <h3 className="text-2xl">$28.59</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
