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
      <div>React Demo</div>
    </>
  );
}
