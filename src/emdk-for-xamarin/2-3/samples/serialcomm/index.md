---
publish: true
title: Serial Communication
description: This sample demonstrates the EMDK Serial Communication API to enable support for DEX in your application. DEX (data exchange) is a format for collecting audit and event data from vending machines.
download: 'https://github.com/Zebra/samples-emdkforxamarin-2_3/archive/SerialCommSample1.zip'
source: 'https://github.com/Zebra/samples-emdkforxamarin-2_3/tree/SerialCommSample1'
features: null
devices:
  - TC75KK
  - TC70KK RevB
image: 1.png
screenshots:
  - 2.png
  - 3.png
  - 4.png
layout: sample.html
product: EMDK For Xamarin
productversion: '2.3'
---


##Overview
This sample demonstrates the EMDK Serial Communication API to enable support for DEX in your application. DEX (data exchange) is a format for collecting audit and event data from vending machines.



##Prerequisites

**Items Needed**
* One of the approved devices listed above
* TC7X SNAP On DEX cable ( CBL-TC7X-DEX1-01 )

>Note: Although this sample may work with previous versions of the EMDK, it is advised to [update the EMDK runtime](../../guide/setupDevice/) on your device before loading this sample.

##Loading the Sample Application

1. Click the **Download** button 
2. Extract the downloaded project zip file.
3. Navigate to the root of the unzipped project folder and double-click the **.sln** file. The project will load in the default IDE for that file type.

Alternatively, you can Launch your prefered IDE ( Visual Studio or Xamarin Studio ) and load the project via the File > Open menu.  

##Running The Sample
###Visual Studio

Visual Studio will detect your device connected via USB, it will display the name of that device next to the "Play" button.

![img](../../images/samples/vsPlayButton.png)

Press the "Play" button next to the devices name.  The IDE will build, deploy and start the sample app on your device.

###Xamarin Studio
In Xamarin Studio, you may need to select your attached device from the devices dropdown under `Physical Devices`.

![img](../../images/samples/xs-select-device.png)

Now press the "Play" button. The IDE will build, deploy and start the sample app on your device.

![img](../../images/samples/xsPlayButton.png)

##Using This Sample
1. With the Snap on DEX cable attached, the application should look like the following when it starts.  
  ![img](3.png)  
2. Press the **Write** button. The application should display a message that it has sent the text from the edit field in number of bytes sent in the status area.
  ![img](2.png)    
3.  Press the **Read** button.  The application will continue to read for 10 seconds and then display the read data in the status area.
    ![img](4.png) 
  



















