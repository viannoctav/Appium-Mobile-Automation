1. Run Server
 appium --port your_port


2. Kill ENCONFUSSED Server
 netstat -ano | findstr :your_port
 taskkill /PID <PID> /F

3. Running Spesific File 
 npx wdio run wdio.conf.js --spec D://your_folder//test//specs//your_file.spec.js


4. Running All Files
 npx wdio run wdio.conf.js


5. How to define App Package & App Activity
 adb devices
 adb shell dumpsys window | findstr "mCurrentFocus"

