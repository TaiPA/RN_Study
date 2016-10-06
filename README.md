# RN_Study
To run your app on iOS:
   cd C:\Users\AnhTai\develop\react-native\tmp\RN_Study
   react-native run-ios
   - or -
   Open C:\Users\AnhTai\develop\react-native\tmp\RN_Study\ios\RN_Study.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   Have an Android emulator running (quickest way to get started), or a device connected
   cd C:\Users\AnhTai\develop\react-native\tmp\RN_Study
   react-native run-android

=========================================
References
https://github.com/mvayngrib/rn-nodeify
https://github.com/bitcoinjs/bitcoinjs-lib
https://github.com/bitcoinjs/bip39
https://github.com/ethereumjs/ethereumjs-wallet

=========================================
First install
git clone https://github.com/TaiPA/RN_Study.git
git checkout develop
cd RN_Study
npm install
rnpm link
react-native link react-native-randombytes
react-native run-ios

=========================================
About crypto
Which libs in node_modules that have "var crypto = require('crypto');"
have to change to : "var crypto = require('react-native-crypto');"
1. hdkey
2. ethereumjs-wallet