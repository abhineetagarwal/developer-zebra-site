---
title: ProfileConfig.DataCapture.DataDelivery
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


Class for dealing with DataDelivery profile data [ ProfileConfig.DataCapture.DataDelivery](../ProfileConfig-DataCapture-DataDelivery)
 
 

**Example Usage:**
	
	:::java
	
	DataDelivery dataDelivery = profileConfig.dataCapture.dataDelivery;
	


##Public Fields

###intent

Gets and Sets Intent configuration object [ ProfileConfig.DataCapture.DataDelivery.Intent](../ProfileConfig-DataCapture-DataDelivery-Intent).
 
 

**Example Usage:**
	
	:::java
	
	profileConfig.dataCapture.dataDelivery.intent.output_enabled = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.DataDelivery.Intent

###keystroke

Gets and Sets Keystroke configuration object [ ProfileConfig.DataCapture.DataDelivery.Keystroke](../ProfileConfig-DataCapture-DataDelivery-Keystroke).
 
 

**Example Usage:**
	
	:::java
	
	profileConfig.Keystroke.ime_output_enabled = ENABLED_STATE.DEFAULT;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.DataDelivery.Keystroke












