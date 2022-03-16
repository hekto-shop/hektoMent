import PageContainer from "../../containers/PageContainer";
import ProfileHeaderBar from "./ProfileHeaderBar/ProfileHeaderBar";
import ProfileEdit from "./ProfileEdit";
import ProfileNavigation from "./ProfileHeaderBar/ProfileNavigation";
import { Switch, Route } from "react-router-dom";

import styles from "./Profile.module.scss";
import ProfileDetails from "./ProfileDetails/ProfileDetails";

const Profile = () => {
  return (
    <PageContainer>
      <ProfileHeaderBar />
      <main>
        <ProfileNavigation style={styles.navigation} />
        <Switch>
          <Route path="/profile" exact>
            <ProfileDetails />
          </Route>
          <Route path="/profile/edit">
            <ProfileEdit />
          </Route>
        </Switch>
      </main>
    </PageContainer>
  );
};

export default Profile;
