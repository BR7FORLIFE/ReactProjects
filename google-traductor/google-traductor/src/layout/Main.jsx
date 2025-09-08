import Button from "../components/Button";

let info = [{ imgSrc: "src/assets/traslate_icon.svg", title: "ejemplo", alt: "image" }];
function Main() {
  return (
    <main>
      <div className="flex flex-row gap-2">
        {info.map(({ imgSrc, title, alt }, index) => (
          <Button key={index} imgSrc={imgSrc} title={title} alt={alt} />
        ))}
      </div>
      <div></div>
      <div></div>
    </main>
  );
}

export default Main;
