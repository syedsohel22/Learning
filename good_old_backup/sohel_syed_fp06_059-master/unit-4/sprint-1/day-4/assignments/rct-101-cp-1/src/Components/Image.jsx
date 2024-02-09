// Write Code here
// do a default export
export default function Image(props) {
  const { title, src, alt, width, height } = props;
  return (
    <>
      <h2>{title}</h2>
      <img alt={alt} width={width} src={src} height={height} />
    </>
  );
}
