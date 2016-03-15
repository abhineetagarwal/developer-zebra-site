---
publish: true
title: App Manager
description: Shows how to use the EMDK for Android Profile APIs to manage App Manager profiles.
download: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/archive/ProfileAppMgrSample1.zip'
source: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/tree/ProfileAppMgrSample1'
features:
  - Profile Manager
  - App Manager
devices:
  - MC18KK
  - MC32N0JB
  - MC40JB
  - MC40KK
  - MC67JB
  - MC92KK
  - TC55JB
  - TC55KK
  - TC70KK
  - TC75KK
image: 1.png
screenshots:
  - 1.png
  - 2.png
  - 3.png
layout: sample.html
product: EMDK For Android
productversion: '2.3'
---

##Overview

The EMDK for Android allows you to manage applications on the device. 

The available actions are:  
- Install an application
- Uninstall an application
- Upgrade an application  
- Set an application as the default launcher 

This sample application will allow you to install, upgrade, and uninstall an application. 

##Prerequisites
- Java JDK 
- Eclipse with ADT plugin or  Android Studio
- EMDK for Android  
- An EMDK supported Android device

For more information about setting up the EMDK please see the [EMDK Setup Guide](../../guide/setup).

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](../../guide/emdksamples_androidstudio)
* [Eclipse/ADT](../../guide/emdksamples_eclipse)

##Deploying The Sample Application
[Using the EMDK Samples](../../guide/sample/emdksamples)

##Using This Sample
1. When the application starts it should look like the following.  
	![img](../../images/samples/2_1.png)  
2. Enter the path to an APK file that you have placed on your device.  /sdcard/Battery Sample Application.apk
	![img](../../images/samples/2_2.png)  	
	>Note:  
	>To place an APK file on the device connect the device to to you computer over USB as a "Medea Device" and copy an APK to your device.  
3.  Click "Set" 
4.  Check the status field.   
	![img](../../images/samples/2_3.png)  
	












