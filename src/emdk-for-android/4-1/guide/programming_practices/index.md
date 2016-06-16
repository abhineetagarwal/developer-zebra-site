---
title: EMDK for Android Programming Practices
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---

##EMDK concurrency guidelines

Currently the EMDK is **not** thread safe, API calls such as Barcode and SimulScan are designed to be called sequentially. If called within separate threads, such as from AsyncTasks, some kind of synchronization mechanism should be employed to prevent simultaneous API calls. A single instance of a feature manger object should not be shared among multiple threads, even in the same application, unless the calls are made sequentially. 

Parallel execution is not supported, with the exception that **Barcode Manager** object and **Profile Manger** objects can be used simultaneously.
 


##Creating a common Application to run on Zebra and Non-Zebra devices

For those who want to write a common application that is capable of running on both Zebra and Non-Zebra devices, care must be taken to use the EMDK components only on the Zebra devices as described below:  

1.	The common app containing the EMDK components will not install on a non-Zebra device and will result in the error “Installation error: INSTALL\_FAILED\_MISSING\_SHARED\_LIBRARY". 

 To overcome this problem, the application manifest file must be modified as shown below: 
 
                :::xml
                <uses-library android:name="com.symbol.emdk" android:required="false" />

2.	When the common app is launched on a non-Zebra device, the "ClassNotFoundException" exception may occur.  To overcome this problem, do not implement the EMDK interfaces in the MainActivity.  Instead, create a separate class (ex: EMDKAPIWrapper or any other name) and implement the EMDK related calls in that. When the activity starts, create the EMDKAPIWrapper object during the run time only if you are using the Zebra device.


        :::java
        public class MainActivity extends Activity {
        private EMDKWrapper emdkWrapper = null;
            @Override
            protected void onCreate(Bundle savedInstanceState) {
                /* Rebranded Zebra devices are set to "Zebra Technologies"*/
                /* Motorola devices are set to "Motorola Solutions" */
                
                if(android.os.Build.MANUFACTURER.contains("Zebra Technologies") || android.os.Build.MANUFACTURER.contains("Motorola Solutions") ){
                emdkWrapper  = new EMDKWrapper();
            }
            }
            
            @Override
            protected void onDestroy() {
                //Release the EMDKmanager on Application exit.
                if (emdkWrapper  != null) {
                        emdkWrapper .release();			
                }
            }
            
            public class EMDKWrapper implements EMDKListener {
                EMDKManager emdkManager = null;
                @Override
                void getEMDKManager(Bundle savedInstanceState) { 
                    EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);
                    
                    if (results.statusCode != EMDKResults.STATUS_CODE.SUCCESS) {
                        //Failed to request the EMDKManager
                    }
                }
            }
            
            @Override
            void release() {
                //Release the EMDKmanager on Application exit.
                if (emdkManager != null) {
                    emdkManager.release();	
                    emdkManager = null;		
                }
            }
            
            @Override
            public void onOpened(EMDKManager emdkManager) {
                this. emdkManager = emdkManager;
            //The EMDK Manager is ready and now you can call other EMDK APIs.
            }
            
            
            @Override
            public void onClosed() {
                /* EMDKManager is closed abruptly. Call EmdkManager.release() to free the resources used by the current EMDK instance. */
                if (emdkManager != null) {
                    emdkManager.release();	
                    emdkManager = null;		
                }
            }
        }


##EMDK Manager opening and closing 

The application must call EMDKManager.getEMDKManager to use the EMDK. It is recommended to call this method in the onCreate method to avoid a delay at a later stage.  EMDKManager will call the interface EMDKListener.onOpened when the EMDK is ready to use and this callback will be called on main thread only; therefore the application must not block the Main thread to receive EMDKListener.onOpened callback.

The application must call the EMDKManager.release() in the below scenarios:

1.	On application exit.
2.	On EMDKListener.onClosed callback. 

The EMDKListener.onClosed gets called to notify the application that the EMDKManager object has been abruptly closed due to some failures at EMDK or a lower layer. When this occurs, the application must the release the current EMDK manager instance and get the new EMDK Manager instance 

###Refer the below code snippets for EMDKManager opening and closing

    :::java
    public class MainActivity extends Activity implements EMDKListener {
        private EMDKManager emdkManager = null;
    
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), this);
            if (results.statusCode != EMDKResults.STATUS_CODE.SUCCESS) {
                    //Failed to request the EMDKManager
                }
            }
        }
        
        @Override
        protected void onDestroy() {
            //Release the EMDKmanager on Application exit.
            if (emdkManager != null) {
                emdkManager.release();
                emdkManager = null;
                }
            }
            
        @Override
        public void onOpened(EMDKManager emdkManager) {
        this. emdkManager = emdkManager;
                //The EMDK Manager is ready and now you can call other EMDK APIs.
        }
        
        @Override
        public void onClosed() {
        /* EMDKManager is closed abruptly. Call EmdkManager.release() to free the  resources used by the current EMDK instance. */
        if (emdkManager != null) {
            emdkManager.release();
            emdkManager = null;
        }
        }
    }

##Checking EMDK Version on Device

Zebra Technologies Mobile Devices running the KitKat Android OS will have the EMDK device runtime built-in, but devices running Jelly Bean Android OS will not have the EMDK device runtime built-in.  The EMDK version on the device can be checked either by manually or programmatically.

###Manual Steps
Goto Settings > Apps > All > EMDK Service. Click on EMDK Service icon to see the version.

###Programmatic Steps

Option 1:

    :::java
    Use Android PackageManager to get the EMDK version.
    try {    
        String emdkPkgName = "com.symbol.emdk.emdkservice";
            PackageInfo pinfo = getPackageManager().getPackageInfo(emdkPkgName, 0);
            String emdkVersion = pinfo.versionName;
    } catch (PackageManager.NameNotFoundException e) {
        // EMDK does not exists on the device.
    }

Option 2:

    :::java
    Use EMDK VersionManager to get the EMDK version as described in the VersionManager API reference.


##Selecting EMDK in the MAKE file

The following must be declared in the application MAKE file to use the EMDK SDK library to compile the application:

    :::java
    LOCAL_JAVA_LIBRARIES := com.symbol.emdk
    LOCAL_PREBUILT_STATIC_JAVA_LIBRARIES := libemdk:com.symbol.emdk/com.symbol.emdk.jar









