import {MDCBanner} from '@material/banner';
import UserProfileTitle from "./UserProfileTitle";
import UserProfileLogoutButton from "./UserProfileLogoutButton";
// const banner = new MDCBanner(document.querySelector('.mdc-banner'));

function UserProfileHeader() {
    return (
        <div className="mdc-banner" role="banner">
        <div className="mdc-banner__content"
             role="alertdialog"
             aria-live="assertive">
            <UserProfileLogoutButton />
            <div className="mdc-banner__graphic-text-wrapper">
                <div className="mdc-banner__text">
                   <UserProfileTitle />
                </div>
            </div>

        </div>
    </div>
    )
}

export default UserProfileHeader