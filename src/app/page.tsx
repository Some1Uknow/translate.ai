import MainContainer from "./components/MainContainer";

export default function page() {
  return (
    <>
      <main className="m-20 flex flex-col gap-1">
        <div className=" text-6xl font-semibold">Translate.AI</div>
        <div className="text-xl">Tranlate to your preferred language in just 1 click</div>
        <MainContainer/>
      </main>
    </>
  );
}
