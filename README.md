# @byldd/expo-google-signin

This README provides a step-by-step guide to set up Google Sign-In for React Native projects using the **@byldd/expo-google-signin** package.

---

## **Steps**

### **1. Create a New Expo Project**
Run the following command to create a new Expo project:
```bash
expo init your-project-name
```

---

### **2. Prebuild the Project**
Run the following command to generate the `android` and `ios` directories:
```bash
npx expo prebuild
```

This command creates the necessary native directories for iOS and Android.

---

### **3. Update app.json File**
Add the following plugins to the `app.json` file:
```json
"plugins": [
  "@react-native-firebase/app",
  "@react-native-firebase/auth",
  "@react-native-google-signin/google-signin",
  [
    "expo-build-properties",
    {
      "ios": {
        "useFrameworks": "static"
      }
    }
  ]
]
```

---

### **4. Create a New Firebase Project**

1. **Setup iOS Project**
   - For the app bundle ID, go to the `app.json` file.
   - Inside the `ios` section, copy the `bundleIdentifier` and use it to configure the iOS app in Firebase.
   - **Note:** Do not download `GoogleService-Info.plist` at this point to avoid the reverse client ID bug.

2. **Setup Android Project**
   - For the app bundle ID, go to the `app.json` file.
   - Inside the `android` section, copy the `package` and use it to configure the Android app in Firebase.
   - **Note:** Do not download `google-services.json` at this point to avoid the reverse client ID bug.

3. **Generate SHA1 and SHA256 Keys**
   - Run the following commands to generate the SHA1 and SHA256 keys:
     ```bash
     cd android && ./gradlew signingReport
     ```
   - Copy the SHA1 and SHA256 keys of the debug variant.

4. **Add SHA Keys to Firebase**
   - Go to **Settings** in your Firebase project.
   - Add the **SHA1** and **SHA256** keys under the project settings.

5. **Enable Google Authentication**
   - In Firebase, go to **Authentication**.
   - Enable the **Google provider**.

6. **Download Configuration Files**
   - Download the `GoogleService-Info.plist` and `google-services.json` files from Firebase.
   - Place these files in the **root folder** of your Expo project.

7. **Update app.json with File Paths**
   - Add the path to the `GoogleService-Info.plist` file in the `ios` section of the `app.json` file:
     ```json
     "ios": {
       "googleServicesFile": "./GoogleService-Info.plist"
     }
     ```
   - Add the path to the `google-services.json` file in the `android` section of the `app.json` file:
     ```json
     "android": {
       "googleServicesFile": "./google-services.json"
     }
     ```

---

### **5. Install Required Packages**
Run the following command to install the required npm packages:
```bash
npm install @react-native-firebase/app @react-native-firebase/auth @react-native-google-signin/google-signin expo-build-properties @byldd/expo-google-signin
```

---

### **6. Prebuild the Project Again**
Run the following command to ensure all the configurations are applied:
```bash
npx expo prebuild
```

---

### **7. Usage Example**
Here is an example of how to use the **@byldd/expo-google-signin** package in your project:

Note: Make sure to pick the client_id with client_type: 3 from your google-services.json file.
```typescript
import { GoogleSigninService } from "@byldd/expo-google-signin";

const handleGoogleSignin = async (webClientId: string) => {
  try {
    const user = await GoogleSigninService.googleSignIn(webClientId);
    console.log(user);
  } catch (error) {
    console.warn(error);
  }
};
```

---

With these steps, you should be able to successfully set up Google Sign-In in your React Native project using the **@byldd/expo-google-signin** package.

# expo-google-signin
