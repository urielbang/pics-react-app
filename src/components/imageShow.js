function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt="pic" />
    </div>
  );
}
export default ImageShow;
