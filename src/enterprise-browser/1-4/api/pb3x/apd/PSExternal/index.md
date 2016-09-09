---
title: PSExternal.md
---
﻿<html>
  <head>
    <META http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style>
					body
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					margin:20;
					}
					h1
					{
					font-family:verdana,arial,helvetica;
					font-size:medium;
					font-weight:bold;
					}
					th
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					font-weight:bold;
					text-align:left;
					background-color:#CCCCCC;
					}
					td
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					text-align:left;
					}
					.clsRef
					{
					font-family:verdana,arial,helvetica;
					font-size:small;
					color:#003399;
					font-weight:bold;
					text-align:left;
					}
					.clsSyntax
					{
					font-family:courier;
					font-size:x-small;
					text-align:left;
					background-color:#ffffff;
					}
					.clsSyntaxHeadings
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					font-weight:bold;
					text-align:left;
					color:#000066;
					background-color:#efeff7;
					border-bottom: #c8cdde 1px solid;
					}
					.clsSyntaxCells
					{
					font-family:verdana,arial,helvetica;
					font-size:x-small;
					text-align:left;
					background-color:#f7f7ff;
					border-bottom: #d5d5d3 1px solid;
					}
				</style>
    <title>PSExternal</title><script type="text/javascript" language="Javascript">
					
					function ToggleSpan(SpanId, ImgID)
					{
						var path = '../Resources/'
					//Toggle the span view on or off
					var Rollup = document.all.item(SpanId);
					var RollupImg = document.all.item(ImgID);
					var ToggleExpand = path + 'ToggleExpand.gif';
					var ToggleCollapse = path + 'ToggleCollapse.gif';
					Rollup.style.display = (Rollup.style.display=='none' ? 'block' : 'none');
					RollupImg.src = (Rollup.style.display=='none' ? ToggleExpand : ToggleCollapse);
					}

					function CopyTemplate(sControl)
					{
					//Copy the template values held in the appropriate textarea to clipboard
					if (window.clipboardData)
					{
					window.clipboardData.setData("Text", document.all.item(sControl).value);
					}
					return false;
					}
					
				</script></head>
  <body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" bgcolor="#ffffff" text="#000000">
    <table width="100%">
      <tr>
        <td valign="middle" width="95%">
          <h1>PSExternal Method of the NarrowBand ActiveX Object</h1>
        </td>
        <td width="5%"><img valign="middle" id="imgSymbolLogo" alt="Symbol Inc" src="../Resources/Logo.gif"></td>
      </tr>
    </table>
    <hr size="1">
    <p>
					The 
					<b>PSExternal</b> Method of the NarrowBand ActiveX Object is used to send commands via the Adaptive Printer Driver without returning a result.</p>
    <p class="clsRef"><nobr><span class="ToggleView" onclick="ToggleSpan('SyntaxSpan', 'imgSyntaxToggle')"><img align="absmiddle" id="imgSyntaxToggle" alt="Syntax Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif&#xA;						">
					Syntax
				</span></nobr></p>
    <div id="SyntaxSpan" style="display:block">
      <blockquote>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <th class="clsSyntaxHeadings">PSExternal (Method of the NarrowBand ActiveX Object) Syntax
						</th>
          </tr>
          <tr>
            <td class="clsSyntaxCells">
              <p>NarrowBand.PSExternal(iCommand, strParameter);</p>
            </td>
          </tr>
        </table>
      </blockquote><br></div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ParametersWSpan', 'imgParametersWToggle')"><img align="absmiddle" id="imgParametersWToggle" alt="ParametersW Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif&#xA;					"></span>
			Parameters
		</p>
    <div id="ParametersWSpan" style="display:block">
      <blockquote>
				Items listed in this section indicate parameters, or attributes which can be set.
				<BR><BR><table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <col width="20%">
          <col width="20%">
          <col width="38%">
          <col width="22%">
          <tr>
            <th class="clsSyntaxHeadings">Name</th>
            <th class="clsSyntaxHeadings">Possible Values</th>
            <th class="clsSyntaxHeadings">Description</th>
            <th class="clsSyntaxHeadings">
              <table cellspacing="0" cellpadding="0">
                <tr>
                  <td width="85%" class="clsSyntaxHeadings" style="border-bottom-style: none;">Default Value</td>
                </tr>
              </table>
            </th>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>iCommand</b></td>
            <td valign="top" class="clsSyntaxCells">See APD documentation for function values</td>
            <td valign="top" class="clsSyntaxCells">A four digit numeric value representing the required Adaptive Printer Driver function ID.</td>
            <td valign="top" class="clsSyntaxCells">N/A</td>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>strParameter</b></td>
            <td valign="top" class="clsSyntaxCells">See APD documentation for function values</td>
            <td valign="top" class="clsSyntaxCells">String containing function specific parameters/data to be passed to the Adaptive Printer Driver.</td>
            <td valign="top" class="clsSyntaxCells">N/A</td>
          </tr>
        </table>
      </blockquote><br></div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
			Examples
		</p>
    <div id="ExamplesSpan" style="display:block">
      <blockquote>
        <p>The following javascript code demonstrates the useage of this method:</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;script&gt;
   var NarrowBand = new ActiveXObject("PocketBrowser.NarrowBand");
   var printerID = '2350C';

   NarrowBand.PSExternal(261, printerID);

   if (NarrowBand.PSExternalEx(257, 'Hello World') &gt; 0)
   {
      alert(NarrowBand.PSGetLastMessage());
   }
&lt;/script&gt;
</pre>
            </td>
          </tr>
        </table>
        <table cellspacing="1" cellpadding="3" width="95%">
          <col width="85%">
          <col width="15%">
          <tr align="right">
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EWB');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EWB">&lt;!-- 
The following javascript code demonstrates the useage of this method:
--&gt;

&lt;script&gt;
   var NarrowBand = new ActiveXObject("PocketBrowser.NarrowBand");
   var printerID = '2350C';

   NarrowBand.PSExternal(261, printerID);

   if (NarrowBand.PSExternalEx(257, 'Hello World') &gt; 0)
   {
      alert(NarrowBand.PSGetLastMessage());
   }
&lt;/script&gt;
</textarea></div>
      </blockquote>
    </div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('InfoSpan', 'imgInfoToggle')"><img align="absmiddle" id="imgInfoToggle" alt="Info Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
			Additional Information
		</p>
    <div id="InfoSpan" style="display:block">
      <blockquote>
        <table>
          <tr>
            <th>Supported Platforms</th>
            <td>Windows CE, Windows Mobile</td>
          </tr>
          <tr>
            <th>Persistence</th>
            <td>Executes immediately</td>
          </tr>
          <tr>
            <th>Minimum Requirements</th>
            <td>None</td>
          </tr>
        </table>
      </blockquote><br></div>
    <div id="DefaultParamsSpan" style="display:none">
      <pre><textarea id="DefaultParameters"></textarea></pre>
    </div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('AlsoSpan', 'imgAlsoToggle')"><img align="absmiddle" id="imgAlsoToggle" alt="Also Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
			See Also
		</p>
    <div id="AlsoSpan" style="display:block">
      <BLOCKQUOTE><a href="PSGetLastMessage.html&#xA;						">PSGetLastMessage</a> <a href="PSExternalEx.html&#xA;						">PSExternalEx</a> </BLOCKQUOTE><br></div>
    <hr size="1">
    <div align="right">© 2016 Symbol Technologies, Inc. All rights reserved.</div>
  </body>
</html>