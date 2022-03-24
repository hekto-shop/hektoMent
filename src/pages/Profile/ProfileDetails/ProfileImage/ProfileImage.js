import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSession } from "../../../../contexts/auth-context";

import { profilePlaceholder } from "../../../../assets/img";
import { getDownloadUrl, uploadImage } from "../../../../helpers/upload-image";
import styles from "./ProfileImage.module.scss";

const ProfileImage = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef();
  const { user } = useSession();
  const uid = useSelector((state) => state.userReducer.user.uid);

  useEffect(() => {
    getDownloadUrl(uid, user).then((url) => setImageUrl(url));
  }, [uid, user]);

  const fileChange = async (files) => {
    const ref = await uploadImage(uid, files[0]);
    const downloadUrl = await ref.getDownloadURL();
    setImageUrl(downloadUrl);
  };

  return (
    <div className={`${styles["avatar-cont"]} ${props.className}`}>
      <div className={styles["avatar-cont__inner"]}>
        <img
          src={imageUrl || profilePlaceholder}
          alt="profile"
          className={styles["profile-avatar"]}
        />
        <input
          type="file"
          accept=".png,.jpg"
          className={styles["file-input"]}
          ref={fileInputRef}
          onChange={(e) => fileChange(e.target.files)}
        />
        <button
          className={styles["upload-btn"]}
          onClick={() => fileInputRef.current.click()}
        >
          Change Avatar
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
