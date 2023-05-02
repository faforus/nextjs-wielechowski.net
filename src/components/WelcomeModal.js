import webpSupported from "@/helpers/webpSupport";

const WelcomeModal = () => {
  return (
    <div className="welcome">
      <img
        src={webpSupported ? "/webpimages/logo.webp" : "/images/logo.jpg"}
        alt="welcome"
      />
    </div>
  );
};

export default WelcomeModal;
