---
title: Signature Decoder
---


<b>
The Signature Decoder is used to enable or disable the Signature decoder.
</b>

##Syntax

<table class="re-table"><tr><th class="tableHeading">signature (Decoder) &lt;META&gt; Syntax
</th></tr><tr><td class="clsSyntaxCells clsOddRow"><p>&lt;META HTTP-Equiv="scanner" content="Signature:[parameter]"&gt;</p></td></tr></table>
<table class="re-table"><tr><th class="tableHeading">signature JavaScript Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the JavaScript Object <b>'scanner'</b> will exist on the current page and can be used to interact directly with the signature.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set signature parameters via JavaScript use the following syntax: scanner.Parameter = Value;
<P />e.g. <b>scanner</b>.signature = Value;
</td></tr></table>
<table class="re-table"><tr><th class="tableHeading">Signature Ruby Object Syntax:</th></tr><tr><td class="clsSyntaxCells clsOddRow">
By default the Ruby Object <b>'Scanner'</b> will exist on the current page and can be used to interact directly with the Signature.
</td></tr><tr><td class="clsSyntaxCells clsEvenRow">
To Set Signature parameters via Ruby use the following syntax: Scanner.Parameter = Value
<P />e.g. <b>Scanner</b>.signature = Value
</td></tr></table>



##Parameters


Items listed in this section indicate parameters, or attributes which can be set.
<table class="re-table"><col width="20%" /><col width="20%" /><col width="38%" /><col width="22%" /><tr><th class="tableHeading">Name</th><th class="tableHeading">Possible Values</th><th class="tableHeading">Description</th><th class="tableHeading">Default Value</th></tr><tr><td class="clsSyntaxCells clsOddRow"><b>signature:[Value]
</b></td><td class="clsSyntaxCells clsOddRow">enabled / Disabled</td><td class="clsSyntaxCells clsOddRow">Enables / Disables the Signature decoder.  The barcode will be returned as a Data URI object with a jpeg mime type, you should specify the barcodeDataFormat and dataBufferSize parameters accordingly.</td><td class="clsSyntaxCells clsOddRow">Device specific</td></tr></table>
<table class="re-table"><col width="78%" /><col width="8%" /><col width="1%" /><col width="5%" /><col width="1%" /><col width="5%" /><col width="2%" /></table>





##Requirements

<table class="re-table"><tr><th class="tableHeading">RhoElements Version</th><td class="clsSyntaxCell clsEvenRow">2.1 or above
</td></tr><tr><th class="tableHeading">Supported Devices</th><td class="clsSyntaxCell clsOddRow">All supported devices except: Android.</td></tr><tr><th class="tableHeading">Minimum Requirements</th><td class="clsSyntaxCell clsOddRow">Scanner and device that supports the Signature decoder.</td></tr><tr><th class="tableHeading">Persistence</th><td class="clsSyntaxCell clsEvenRow">Transient - Decoder settings are only guaranteed to persist until the Scanner is disabled</td></tr></table>


##HTML/Javascript Examples

The following example enables the scanner to read only Signature barcodes:

	<META HTTP-Equiv="scanner" Content="allDecoders:disabled">
	<META HTTP-Equiv="scanner" Content="Signature:enabled">
	<META HTTP-Equiv="scanner" Content="barcodeDataFormat:binary;dataBufferSize:5000">
	<META HTTP-Equiv="scanner" Content="enabled">
	


## Ruby Examples

The following example displays the signature panel with the default values:

	def display
		SignatureCapture.visibility = 'visible'
	end

To call the this function from HTML, use the following code: 

	<li onclick="display();">Display signature panel</li>

Where 'display()' is a JavaScript function which looks like: 

	function display() {
		$.get('/app/SignatureCapture/display', { });
		return false;
	}

The following example displays the signature panel at the bottom of the screen with a pen color and a background color, attaches a signature save event to save the signature event. This function can be called from HTML in a similar fashion to the one described above.
  
	def displayWithParams

		#Get the width
		width = System::get_property('screen_width')
		#and the height of the screen
		height = System::get_property('screen_height')

		SignatureCapture.width=width
		SignatureCapture.height=120

		#Position the signature panel at the bottom of our page
		SignatureCapture.left=0
		SignatureCapture.top=(height-250)

		SignatureCapture.penWidth=2
		SignatureCapture.name='signPanel1'
		SignatureCapture.penColor="#000000"
		SignatureCapture.bgColor="#D4D2D2"
		SignatureCapture.visibility='visible'
		SignatureCapture.signatureSaveEvent = url_for(:action => :signatureSaveEventListener)
		#Remember to create the 'Signatures' folder under the root of the device before executing this function! 
		SignatureCapture.destination = "url('file://\\Signatures\\sig1.bmp')"    
	end
	
The 'signatureSaveEventListener' is a function that looks like: 
	
	def signatureSaveEventListener
		WebView.execute_js("setFieldValue('Signature saved under Signatures folder in root');")
	end

And the 'setFieldValue' is a JavaScript function that sets the inner HTML of a div to the value received in the arguments. 

The following function triggers a signature save and fires the 'signatureSaveEvent'. The signature is saved as a bitmap in the directory specified in the signature destination:

	def save
		SignatureCapture.capture
	end

The following function clears the signature panel:

	def clear
		SignatureCapture.clear    	
	end
