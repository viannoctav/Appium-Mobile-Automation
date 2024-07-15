Run Server
 appium --port your_port


Kill ENCONFUSSED Server
 netstat -ano | findstr :your_port
 taskkill /PID <PID> /F


Running Spesific File 
 npx wdio run wdio.conf.js --spec D://your_folder//test//specs//your_file.spec.js


Running All Files
 npx wdio run wdio.conf.js


How to define App Package & App Activity
 adb devices
 adb shell dumpsys window | findstr "mCurrentFocus"

