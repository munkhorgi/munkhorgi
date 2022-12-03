import "../App.css";
const Users = ({ user }) => {
  console.log(user);
  return (
    <div className="userFatherDiv">
      <div className="sda">
        <img src={user.image} alt="img" className="userImg" />
        <h2>{user.username}</h2>
      </div>
      <button className="Switch">Switch</button>
    </div>
  );
};

export default Users;
