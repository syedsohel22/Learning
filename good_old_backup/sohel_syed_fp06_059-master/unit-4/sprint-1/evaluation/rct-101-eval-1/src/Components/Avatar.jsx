//enter code here
// Avatar should accept caption and image  as props
// do default export

export default function Avatar(props) {
  const { image, caption, src, heading ,alt,h2} = props;
  const styles = {
    borderRadius: "50%",
  };
  return (
    <>
      <image src={src} style={styles} alt={caption} />
      <h2>{heading}</h2>
    </>
  );
}
