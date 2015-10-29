// JavaScript Document
private void openFacebookApp() {
    String facebookUrl = "https://www.facebook.com/KingstonandCo";
    String facebookID = "239901132808503";

    try {
        int versionCode = getActivity().getApplicationContext().getPackageManager().getPackageInfo("com.facebook.katana", 0).versionCode;

        if(!facebookID.isEmpty()) {
            // open the Facebook app using facebookID (fb://profile/facebookID or fb://page/facebookID)
            Uri uri = Uri.parse("fb://page/" + facebookID);
            startActivity(new Intent(Intent.ACTION_VIEW, uri));
        } else if (versionCode >= 3002850 && !facebookUrl.isEmpty()) {
            // open Facebook app using facebook url
            Uri uri = Uri.parse("fb://facewebmodal/f?href=" + facebookUrl);
            startActivity(new Intent(Intent.ACTION_VIEW, uri));
        } else {
            // Facebook is not installed. Open the browser
            Uri uri = Uri.parse(facebookUrl);
            startActivity(new Intent(Intent.ACTION_VIEW, uri));
        }
    } catch (PackageManager.NameNotFoundException e) {
        // Facebook is not installed. Open the browser
        Uri uri = Uri.parse(facebookUrl);
        startActivity(new Intent(Intent.ACTION_VIEW, uri));
    }
}