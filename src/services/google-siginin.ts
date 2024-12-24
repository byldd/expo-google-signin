import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

export class GoogleSigninService {
  public static async googleSignIn(
    webClientId: string
  ): Promise<FirebaseAuthTypes.UserCredential> {
    GoogleSignin.configure({
      webClientId,
    });
    await GoogleSignin.hasPlayServices();
    const { data } = await GoogleSignin.signIn();
    if (data && data.idToken) {
      const googleCredential = auth.GoogleAuthProvider.credential(
        data?.idToken
      );
      return await auth().signInWithCredential(googleCredential);
    }
    return {
      user: null,
    };
  }
}