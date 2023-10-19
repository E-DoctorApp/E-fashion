import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/clientDard.css";


interface User {
  id: number;
  firstName: string;
  lastName: string;
  profileImage: string;
  coverImage: string;
  type: "regular" | "brand" | "fashionista";
  image: string;
  followers: number;
  following: boolean;
}

const UpcomingBrands = ({ users }: { users: User[] }) => {
  const [brandUsers, setBrandUsers] = useState<User[]>([]);

  useEffect(() => {
    setBrandUsers(users.slice(0, 3));
  }, [users]);

  // doesn't work  follow and Unfollwow
  const handleFollow = (user: User) => {
    axios
      .put(`http://localhost:5000/api/user/${user.id}`, {
        followers: user.followers + 1,
      })
      .then((response) => {
        const updatedUsers = brandUsers.map((u) => {
          if (u.id === user.id) {
            return { ...u, following: true };
          }
          return u;
        });
        setBrandUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUnfollow = (user: User) => {
    axios
      .put(`http://localhost:5000/api/user/${user.id}`, {
        followers: user.followers - 1,
      })
      .then((response) => {
        const updatedUsers = brandUsers.map((u) => {
          if (u.id === user.id) {
            return { ...u, following: false };
          }
          return u;
        });
        setBrandUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="clientCard-container">
      {brandUsers.map((user) => (
        <div key={user.id} className="clientCard ">
          <div className="clientCardSha shadow" style={{ position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{ width: "100%", height: "18rem" }}>
              <img style={{ width: "100%", height: "100%" }} className="immgg" src={user.profileImage} alt="" />
            </div>
            <div style={{ position: "absolute", top: "46%", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "6rem" }}>
              <img alt="card-image" style={{ width: "30%", height: "100%", borderRadius: "50%" }} src={user.coverImage} />
            </div>
            <div style={{ marginTop: "3rem" }} className="images flex flex-c justify-center alg-center">
              <div className="text-log">{user.firstName}</div>
            </div>
            <div className="parag">
              <p className="brand-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {user.following ? (
              <button className="butt" onClick={() => handleUnfollow(user)}>
                <div className="butt-wrapper">Unfollow</div>
              </button>
            ) : (
              <button className="butt" onClick={() => handleFollow(user)}>
                <div className="butt-wrapper">+ Follow </div>
              </button>

            )}

          </div>

        </div>
      ))}
    </div>
  );
};
const BrandCard = () => {
  const [brands, setBrands] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://localhost:5000/api/users/getByType/brand")
      .then((response) => {

        const users = response.data.map((user) => ({
          ...user,
          following: false,
        }));
        setBrands(users);
      });
  }, []);

  return (
    <div>
      <UpcomingBrands users={brands} />
    </div>
  );
};

export default BrandCard;