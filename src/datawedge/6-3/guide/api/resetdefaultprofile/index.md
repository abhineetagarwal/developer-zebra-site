---
title: Reset Default Profile 
layout: guide.html
product: DataWedge
productversion: '6.3'
---

## RESET_DEFAULT_PROFILE

Used to reset the default Profile to Profile0.

### Function Prototype

	:::javascript
	Intent i = new Intent();
	i.setAction("com.symbol.datawedge.api.ACTION");
	i.putExtra("com.symbol.datawedge.api.RESET_DEFAULT_PROFILE");


###Parameters

**ACTION** [String]: "com.symbol.datawedge.api.ACTION"

**EXTRA_DATA** [String]: "com.symbol.datawedge.api.RESET_DEFAULT_PROFILE"

### Return Values
(None)

Error and debug messages are logged to the Android logging system, which can be viewed and filtered by the logcat command. Use logcat from an ADB shell to view the log messages:

	:::term
	$ adb logcat -s DWAPI

Error messages are logged for invalid actions, parameters and failures (e.g. Profile not found or associated with an application).

### Example

	// define action string
	String resetDefaultProfile = "com.symbol.datawedge.api.ACTION";
	String extraData = "com.symbol.datawedge.api.RESET_DEFAULT_PROFILE";

	public void onResume() {
	        // create the intent
	        Intent i = new Intent();
	        // set the action to perform
	        i.setAction(resetDefaultProfile);
	        context.this.sendBroadcast(i);
	}

###Comments
(None)

-----

**SEE ALSO**:

[Zebra Support Central](https://www.zebra.com/us/en/support-downloads.html) | Integrator Guides, Product Manuals, Software Downloads and Support

[LaunchPad](https://developer.zebra.com/welcome) | Zebra Developer Community

[Intent](https://developer.android.com/reference/android/content/Intent.html) | Android Developers

[Intents and Intent Filters](http://developer.android.com/guide/components/intents-filters.html) | Android Developers

[Android Intents](http://www.vogella.com/tutorials/AndroidIntent/article.html) | Tutorial