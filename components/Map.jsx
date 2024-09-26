const Map = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.4321704096845!2d106.7398998!3d47.9278417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96edf95236e235%3A0xa57c68edad3757e1!2sGOYHONDOO%20TSETSERLEG!5e0!3m2!1sen!2sus!4v1633034232121!5m2!1sen!2sus";

  return (
    <div>
      <iframe
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Google Map Location"
      ></iframe>
    </div>
  );
};

export default Map;
