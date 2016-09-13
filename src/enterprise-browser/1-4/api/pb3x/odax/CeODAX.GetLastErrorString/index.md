---
title: CeODAX.GetLastErrorString.md
productversion: '1.4'
product: Enterprise Browser
layout: guide.html
subhead: PocketBrowser 3.x APIs
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
    <title>GetLastErrorString </title><script type="text/javascript" language="Javascript">
					
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
          <h1>GetLastErrorString  Method of the ODAX ActiveX Object</h1>
        </td>
        <td width="5%"><img valign="middle" id="imgSymbolLogo" alt="Symbol Inc" src="../Resources/Logo.gif"></td>
      </tr>
    </table>
    <hr size="1">
    <p>
					The 
					<b>GetLastErrorString </b> Method of the ODAX ActiveX Object returns a string containing an error message relating to the last error that occurred.</p>
    <p class="clsRef"><nobr><span class="ToggleView" onclick="ToggleSpan('SyntaxSpan', 'imgSyntaxToggle')"><img align="absmiddle" id="imgSyntaxToggle" alt="Syntax Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif&#xA;						">
					Syntax
				</span></nobr></p>
    <div id="SyntaxSpan" style="display:block">
      <blockquote>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <th class="clsSyntaxHeadings">GetLastErrorString  (Method of the ODAX ActiveX Object) Syntax
						</th>
          </tr>
          <tr>
            <td class="clsSyntaxCells">
              <p>var strErrorMsg = object.GetLastErrorString();</p>
            </td>
          </tr>
        </table>
      </blockquote><br></div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('axReturnsSpan', 'aximgReturnsToggle')"><img align="absmiddle" id="aximgReturnsToggle" alt="axReturns Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
			Return Values
		</p>
    <div id="axReturnsSpan" style="display:block">
      <blockquote>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <col width="20%">
          <col width="80%">
          <tr>
            <th class="clsSyntaxHeadings">Name</th>
            <th class="clsSyntaxHeadings">Description</th>
          </tr>
          <tr>
            <td class="clsSyntaxCells" valign="top"><b>StrErrorMsg</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">Returns a string containing an error message</td>
          </tr>
        </table>
      </blockquote><br></div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
			Examples
		</p>
    <div id="ExamplesSpan" style="display:block">
      <blockquote>
        <p>The following javascript uses the FileExists method:</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");

   var count = ax.Select('SELECT * FROM \'\\application\\test.xml\';', ',', false);
   ax.Clear();
   var colval = ax.Get("field1");// this will result in an error
   if(colval.length &lt; 1)
   {
	  var strErrorMsg = ax.GetLastErrorString();
	  alert(strErrorMsg);
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
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EDB');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EDB">&lt;!-- 
The following javascript uses the FileExists method:
--&gt;

&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");

   var count = ax.Select('SELECT * FROM \'\\application\\test.xml\';', ',', false);
   ax.Clear();
   var colval = ax.Get("field1");// this will result in an error
   if(colval.length &lt; 1)
   {
	  var strErrorMsg = ax.GetLastErrorString();
	  alert(strErrorMsg);
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
            <td>Windows Mobile, Windows CE</td>
          </tr>
          <tr>
            <th>Persistence</th>
            <td>Runs immediately.</td>
          </tr>
          <tr>
            <th>Min. Requirements</th>
            <td>None.</td>
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
      <BLOCKQUOTE><a href="CeODAX.Clear.html&#xA;						">CeODAX.Clear</a> <a href="CeODAX.Copy.html&#xA;						">CeODAX.Copy</a> <a href="CeODAX.Delete.html&#xA;						">CeODAX.Delete</a> <a href="CeODAX.Execute.html&#xA;						">CeODAX.Execute</a> <a href="CeODAX.FileExists.html&#xA;						">CeODAX.FileExists</a> <a href="CeODAX.Get.html&#xA;						">CeODAX.Get</a> <a href="CeODAX.Move.html&#xA;						">CeODAX.Move</a> <a href="CeODAX.MoveFirst.html&#xA;						">CeODAX.MoveFirst</a> <a href="CeODAX.MoveLast.html&#xA;						">CeODAX.MoveLast</a> <a href="CeODAX.MoveNext.html&#xA;						">CeODAX.MoveNext</a> <a href="CeODAX.MovePrev.html&#xA;						">CeODAX.MovePrev</a> <a href="CeODAX.Select.html&#xA;						">CeODAX.Select</a> </BLOCKQUOTE><br></div>
    <hr size="1">
    <div align="right">© 2016 Symbol Technologies, Inc. All rights reserved.</div>
  </body>
</html>

