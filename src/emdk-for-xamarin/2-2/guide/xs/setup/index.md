---
title: Xamarin Studio Setup
layout: guide.html
product: EMDK For Xamarin
productversion: '2.2'
---




##Installing the Add-in
Before Installing this Add-in make sure your Xamarin Studio version is at least 5.9.5 or above.

>Note: Xamarin Studio is no longer available for Windows. Visual Studio is recomended for EMDK for Xamarin developemnt on Windows.

1. Open Xamarin Studio Add-in Manager by selecting Xamarin Studio Menu > Add-in Manager
2. Then select the Gallery Tab 
3. Enter `emdk` in the search box in the top right corner of the Add-in Manager.
	> As you type in the search box, the Add-in manager will filter out all add-ins except **EMDK for Xamarin**.

	![img](../../../images/xs/gallery-tab-search-emdk.png)


2.  Now click the `Install` button in the bottom left corner of the right hand pane.

3. Then select Install in the next dialog.

	> You will likely see an error message stating that the install failed. This is a known issue, and will
	be addressed in later revisions of the Xamarin Studio.  The Add-in is now installed, we just need to restart the IDE for the EMDK menu to be displayed.  
	
	![img](../../../images/xs/InstallFailed.png)

4. Click the close button for that dialog, then click the Close button for the Add-in Manager.

5. Restart Xamarin Studio and you will see the EMDK menu on the Menu bar.


##Uninstalling the Add-in

1. Open Xamarin Studio Add-in Manager by selecting Xamarin Studio Menu > Add-in Manager

2. In the Installed Tab, click the **arrow** left of **IDE extensions** label

3. Find and select `EMDK for Xamarin`

4. Click the Uninstall button in the bottom left corner of the right hand pane.
5. Click the Uninstall button in the next dialog.
	> You will likely see an error message stating that the uninstall failed. This is a known issue, and will
	be addressed in later revisions of the Xamarin Studio.  The Add-in is now uninstalled, we just need to restart the IDE for the EMDK menu to be removed. 
6. Click the close button for that dialog, then click the Close button for the Add-in Manager.
7. Restart Xamarin Studio and you should no longer see the EMDK menu on the Menu bar.

##Support file cleanup
The IDE Add-in copies support files to the your file system in order to perform tasks such as Device Runtime Install. To clean up the support files do the following.

* Remove Folder - /Users/Shared/Symbol EMDK for Xamarin
* Remove File - /Users/Shared/Symbol EMDK for Xamarin\EmdkOSUpdateApp_v3.1.38.apk
* Remove File - /Users/Shared/Symbol EMDK for Xamarin\Deployment.bat

## What's Next
In order to fully enable the EMDK for Xamarin, you must [install the Xamarin Component](/emdk-for-xamarin/2-2/guide/component/install)













