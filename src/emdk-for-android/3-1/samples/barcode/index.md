---
publish: true
title: Barcode APIs
description: 'This sample application will allow you to scan barcodes based on selected scanner device, trigger type and a few decoder Decoder Params.'
download: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/archive/BarcodeSample1.zip'
source: 'https://github.com/developer-zebra/samples-emdkforandroid-3_1/tree/BarcodeSample1'
features:
  - Profile Manager
  - Barcode
  - Java APIs
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
  - 4.png
  - 5.png
  - 6.png
layout: sample.html
product: EMDK For Android
productversion: '2.3'
---

##Overview
The EMDK for Android is used when you wish to handle all barcode scanning entirely in Java using [Barcode/Scanning APIs](../../../../api/barcode) introduced in EMDK V3.0. These API's work independently of any [Data Capture profiles.](../../mx/profilebarcode).  

The available actions in the [Barcode/Scanning API](../../../../api/) are:
  
* Set Scanner Device  
* Set [TriggerType](../../api/barcode/Scanner)
* Set [Decoder Params](../../api/barcode/ScannerConfig-DecoderParams)
* Set [Reader Params](../../api/barcode/ScannerConfig-ReaderParams)
* Set [Scan Params](../../api/barcode/ScannerConfig-ScanParams)
* Scan barcodes based on selected features   

This sample application will allow you to scan barcodes based on selected scanner device, trigger type and few decoder [Decoder Params](../../api/barcodeScannerConfig-DecoderParams).

##Prerequisites
[See Using the EMDK Samples](../../guide/sample/emdksamples)

##Loading the Sample Application
[See Using the EMDK Samples](../../guide/sample/emdksamples)

##Deploying The Sample Application
[Using the EMDK Samples](../../guide/sample/emdksamples)

##Using This Sample
1. When the application starts it should look like the following.
  
	![img](../../images/samples/barcode_1.png)
  
2. Set scanner to "Serial SSI Scanner", which is the default one". 

	![img](../../images/samples/barcode_2.png)

3. Set Trigger Type to "HARD".

	![img](../../images/samples/barcode_3.png)

	> Note: Trigger Type "HARD" lets you scan the barcode using device's hard scan key whereas "SOFT" allows you to scan without using devic's hard scan key.

4. Keep all checkboxes checked for decoder params and this is how it should look after setting all fields.
    
	![img](../../images/samples/barcode_4.png)  	

5. Click "Start" button and the status will be updated.

	![img](../../images/samples/barcode_5.png) 
 
6. Since we selected Trigger Type as "HARD", press the hard scan key of Symbol device and scan a particular barcode. It will get the scanned barcode data in "Data" field of UI.
   
	![img](../../images/samples/barcode_6.png)  
	











