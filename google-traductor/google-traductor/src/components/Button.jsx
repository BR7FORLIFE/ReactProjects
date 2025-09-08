function Button({ imgSrc, title, alt }) {
  return (
    <>
      <div className="inline-flex flex-row gap-2">
        <img src={imgSrc} alt={alt} className="size-8 object-cover" />
        <span className="text-blue-600 text-lg font-sans">{title}</span>
      </div>
    </>
  );
}

export default Button