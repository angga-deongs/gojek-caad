// --- Authentication
const Authentication = (props) => {
  const { title, description, heroImage, children } = props;
  return (
    <div className="auth">
      <div className="auth__banner">
        <div className="auth__banner__txt">
          <img src="https://www.tiket.com/tiket-logo.png" alt="Tiket.com Logo" />
          <h3 className="auth__banner__title">{title}</h3>
          <p className="auth__banner__description">{description}</p>
          <img className="auth__banner__hero" src={heroImage} alt={title} />
        </div>
      </div>
      <div className="auth__form">{children}</div>
    </div>
  );
};

export default Authentication;
