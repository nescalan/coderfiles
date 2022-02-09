import React from "react";
import "./UsersCard.css";

const UsersCard = ({ users }) => {
  return (
    <div className="flex-container">
      {users.map((user) => (
        <div className="flip-card">
          <div className="flip-card-inner" key={user.id}>
            <div className="flip-card-front">
              <img className="image-items" src={user.avatar} alt="" />
              <span className="span-items">
                {user.first_name} {user.last_name}
              </span>
              <p>{user.employment.title}</p>
            </div>
            <div class="flip-card-back">
              <h2>
                {user.first_name} {user.last_name}
              </h2>
              <hr />
              <p>
                <strong>Email: </strong> {user.email}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Subscription plan: </strong>
                {user.subscription.plan}{" "}
              </p>
              <p>
                <strong>Status:</strong> {user.subscription.status}{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { UsersCard };
