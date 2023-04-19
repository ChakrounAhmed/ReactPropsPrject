import React from "react";
import PropTypes from "prop-types";

const Profile = ({ children, fullName, bio, profession, handleName }) => {
  return (
    <div style={{ padding: 20 }}>
      <div>{children}</div>
      <h1
        style={{
          border: "1px solid white",
          width: 500,
          position: "relative",
          left: "500px",
          backgroundColor: "red",
        }}
      >
        {fullName}
      </h1>
      <div style={{ color: "blue", backgroundColor: "yellow", padding: 20 }}>
        {bio}
      </div>
      <h2 style={{ color: "rgb(0, 220, 255)", textDecoration: "underline" }}>
        {profession}
      </h2>
      <button
        style={{
          fontSize: 30,
          borderRadius: "10px",
          backgroundColor: "green",
          cursor: "pointer",
        }}
        onClick={handleName}
      >
        ClickMe!
      </button>
    </div>
  );
};

Profile.defaultProps = {
  children: (
    <img
      src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=170667a&w=0&k=20&c=EpwfsVjTx8cqJJZzBMp__1qJ_7qSfsMoWRGnVGuS8Ew="
      alt="Profile img"
    />
  ),
  fullName: `Foulen LFOULENI`,
  bio: `bio`,
  profession: `your profession`,
  handleName: () => {
    alert(`Hello ${Profile.defaultProps.fullName}!`);
  },
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;
