import Articles from "@/components/home/articles";

export default async function Dashboard() {
  return (
    <>
      <div className="z-10 w-full max-w-screen-lg px-5 xl:px-0">
        <div>Dashboard</div>
        <Articles />
      </div>
    </>
  );
}
