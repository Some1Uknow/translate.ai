import MainContainer from "./components/MainContainer";

export default function page() {
  return (
    <>
      <main className="m-20 flex flex-col gap-1">
        <div className=" text-6xl md:text-5xl sm:text-4xl max-sm:text-3xl font-semibold">Translate.AI</div>
        <div className="text-xl max-sm:text-sm">Tranlate to your preferred language in just 1 click</div>
        <MainContainer/>
      </main>
    </>
  );
}
