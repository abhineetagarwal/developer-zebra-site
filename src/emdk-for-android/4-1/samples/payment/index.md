---
publish: true
title: Mobile Payment
description: This sample demonstrates the EMDK Mobile Payment APIs allowing your application to perform EMV and Mag-stripe Payment transactions when using the PD40 Payment device.
downloads:
  - title: Android Studio Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0/archive/PaymentSample1.zip  

sources:
  - title: Android Studio Project
    url: https://github.com/developer-zebra/samples-emdkforandroid-4_0/tree/PaymentSample1

features: 

devices: 
  - MC40 KK
  - MC40 JB
  
image: 1.png
screenshots: 
  - 1.png
  - 2.png
  - 3.png

---


##Overview
This sample demonstrates the EMDK Mobile Payment APIs allowing your application to perform EMV and Mag-stripe Payment transactions when using the PD40 Payment device.

##Prerequisites

**Items Needed**
* One of the approved devices listed above
* PD40 payment device

##Loading the Sample Application
The following guide will walk you through setting up the EMDK samples in your IDE.

* [Android Studio](/emdk-for-android/4-1/guide/emdksamples_androidstudio)

##Using This Sample
1. Bluetooth pair your Android device with the PD40 payment module.
2. Launch the payment API sample. The initial screen should resemble the following.
    ![img](1.png) 
    
2. Press the **Enable** button. You should see a message in the sample application stating that the connection to the payment device was successful. 

  ![img](2.png)    
3. Press the **Do Transaction** button in the sample application.  Now the Payment device should display a message prompting user input. Press the **Enter** key to begin the payment transaction.
  
  ![img](pd40-1.png)
  
  5. Now press the **1** button to pay with cash.
  
  ![img](pd40-2.png)
  
  The payment transaction is now complete.
  
    ![img](3.png) 