import React, { memo, useState } from 'react';

const Post = ({ title, body, verifyPost }) => {
  const [ver, setVer] = useState(verifyPost);
  console.log(title, body, verifyPost);
  const handleToggle = () => {
    setVer((p) => !p);
  };

  const handleColor = () => {
    const color = ['green', 'blue', 'red', 'grey'];
    return color[Math.floor((Math.random() * 10) / 2)];
  };
  console.log(handleColor());
  return (
    <div data-testid="post" style={{ backgroundColor: handleColor() }}>
      <div>
        {/* add title in below h6 and body in P tag */}
        <h6>{title}</h6>
        <p>{body}</p>
      </div>
      {/* The default textContent of button should be  "Verify" and other textContent should be changed to "Verified" and vice-versa */}
      <button data-testid="verify_btn" onClick={handleToggle}>
        {ver ? 'Verified' : 'Verify'}
      </button>
    </div>
  );
};

export default memo(Post);
