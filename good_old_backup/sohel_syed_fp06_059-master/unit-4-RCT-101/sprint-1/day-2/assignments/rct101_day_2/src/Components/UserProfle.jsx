export default function UserProfile(props) {
  return props.usersData.map((elem) => (
    <div className="flex">
      <div className="data">
        <div className="flex_details">
          <h2>{elem.name}</h2>
          <button className="btn">Follow</button>
        </div>
        <p>{elem.title}</p>
        <div className="skills">
          {elem.skillsets.map((elem) => (
            <span className="skill_box">
              <img width="15px" src={elem.icon} alt="" className="icon" />
              <span className="skill_text">{elem.description}</span>
            </span>
          ))}
        </div>
      </div>
      <img
        src={elem.avatar_url}
        alt="profile_Image"
        className="profile_image"
      />
    </div>
  ));
}