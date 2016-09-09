---
title: Code128Other128.md
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
    <title>Code128Other128</title><script type="text/javascript" language="Javascript">
					
					function ToggleSpan(SpanId, ImgID)
					{
						var path = '../../Resources/'
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
          <h1>Code128Other128 META Tag</h1>
        </td>
        <td width="5%"><img valign="middle" id="imgSymbolLogo" alt="Symbol Inc" src="../../Resources/Logo.gif"></td>
      </tr>
    </table>
    <hr size="1">
    <p>
					The 
					<b>Code128Other128</b> META Tag is an action tag used to set the code128other128 property to enable other (non EAN or ISBT) 128 subtype</p>
    <p class="clsRef"><nobr><span class="ToggleView" onclick="ToggleSpan('SyntaxSpan', 'imgSyntaxToggle')"><img align="absmiddle" id="imgSyntaxToggle" alt="Syntax Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif&#xA;						">
					Syntax
				</span></nobr></p>
    <div id="SyntaxSpan" style="display:block">
      <blockquote>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <th class="clsSyntaxHeadings">Code128Other128 (META Tag) Syntax
						</th>
          </tr>
          <tr>
            <td class="clsSyntaxCells">
              <p>&lt;META HTTP-Equiv="scanner" content="code128other128:[parameter]"&gt;</p>
            </td>
          </tr>
        </table>
      </blockquote><br></div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ParametersWSpan', 'imgParametersWToggle')"><img align="absmiddle" id="imgParametersWToggle" alt="ParametersW Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif&#xA;					"></span>
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
            <td valign="top" class="clsSyntaxCells"><b>code128other128:[Value]
													</b></td>
            <td valign="top" class="clsSyntaxCells">true/false</td>
            <td valign="top" class="clsSyntaxCells">Enables/Disables the other (non EAN or ISBT) 128 subtype.</td>
            <td valign="top" class="clsSyntaxCells">Device specific</td>
          </tr>
        </table>
        <table cellspacing="1" cellpadding="3" width="95%">
          <col width="78%">
          <col width="8%">
          <col width="1%">
          <col width="5%">
          <col width="1%">
          <col width="5%">
          <col width="2%">
          <tr align="right">
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><b>Copy parameters template to clipboard:</b></nobr></td>
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsW" alt="Copy META Tag template to clipboard" onclick="CopyTemplate('txtMETATemplateW')" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif">
									META Tags
								</nobr></td>
            <td></td>
            <td valign="middle" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaultsW" alt="Copy Javascript template to clipboard" onclick="CopyTemplate('txtJavascriptTemplateW')" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif">
									Javascript
								</nobr></td>
            <td></td>
          </tr>
        </table>
        <div style="display:none"><textarea id="txtMETATemplateW">&lt;!-- 
The Code128Other128 META Tag is an action tag used to set the code128other128 property to enable other (non EAN or ISBT) 128 subtype
--&gt;

&lt;!-- &lt;META HTTP-Equiv="Scanner" Content="code128other128:[Value]"&gt; --&gt;      &lt;!-- Enables/Disables the other (non EAN or ISBT) 128 subtype. --&gt;</textarea></div>
        <div style="display:none"><textarea id="txtJavascriptTemplateW">&lt;script&gt;
   /*
   The Code128Other128 META Tag is an action tag used to set the code128other128 property to enable other (non EAN or ISBT) 128 subtype
   */

   function doCode128Other128Init()
   {
      var objGeneric = new ActiveXObject("PocketBrowser.Generic");

      //objGeneric.InvokeMETAFunction('Scanner', 'code128other128:[Value]');      /* Enables/Disables the other (non EAN or ISBT) 128 subtype. */

   }
&lt;/script&gt;</textarea></div>
      </blockquote><br></div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
			Examples
		</p>
    <div id="ExamplesSpan" style="display:block">
      <blockquote>
        <p>The following example enables the scanner to read only codabar labels with the other128 subtype property set:</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="codabar:enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="code128other128:true"&gt;
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
</pre>
            </td>
          </tr>
        </table>
        <table cellspacing="1" cellpadding="3" width="95%">
          <col width="85%">
          <col width="15%">
          <tr align="right">
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EJB');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EJB">&lt;!-- 
The following example enables the scanner to read only codabar labels with the other128 subtype property set:
--&gt;

&lt;META HTTP-Equiv="scanner" Content="codabar:enabled"&gt;
&lt;META HTTP-Equiv="scanner" Content="code128other128:true"&gt;
&lt;META HTTP-Equiv="scanner" Content="enabled"&gt;
</textarea></div>
        <p>Above example can also be written as shown below:</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner" Content="codabar:enabled;code128other128:true;enabled"&gt;
</pre>
            </td>
          </tr>
        </table>
        <table cellspacing="1" cellpadding="3" width="95%">
          <col width="85%">
          <col width="15%">
          <tr align="right">
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EQB');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EQB">&lt;!-- 
Above example can also be written as shown below:
--&gt;

&lt;META HTTP-Equiv="scanner" Content="codabar:enabled;code128other128:true;enabled"&gt;
</textarea></div>
        <p>or</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;META HTTP-Equiv="scanner-codabar" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner-code128other128" Content="true"&gt;
&lt;META HTTP-Equiv="scanner-enabled" Content="SCN1"&gt;
</pre>
            </td>
          </tr>
        </table>
        <table cellspacing="1" cellpadding="3" width="95%">
          <col width="85%">
          <col width="15%">
          <tr align="right">
            <td></td>
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EXB');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EXB">&lt;!-- 
or
--&gt;

&lt;META HTTP-Equiv="scanner-codabar" Content="enabled"&gt;
&lt;META HTTP-Equiv="scanner-code128other128" Content="true"&gt;
&lt;META HTTP-Equiv="scanner-enabled" Content="SCN1"&gt;
</textarea></div>
      </blockquote>
    </div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('RemarksSpan', 'imgRemarksToggle')"><img align="absmiddle" id="imgRemarksToggle" alt="Remarks Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
			Remarks
		</p>
    <div id="RemarksSpan" style="display:block">
      <blockquote>
        <DIV class="clsRef"></DIV>
        <DIV style="font-family:verdana,arial,helvetica;font-size:x-small;"></DIV>
        <pre style="font-family:courier;font-size:small;"></pre>
      </blockquote><br></div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('InfoSpan', 'imgInfoToggle')"><img align="absmiddle" id="imgInfoToggle" alt="Info Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
			Additional Information
		</p>
    <div id="InfoSpan" style="display:block">
      <blockquote>
        <table>
          <tr>
            <th>Supported Platforms</th>
            <td>Windows CE, Windows Mobile, Windows Mobile SE</td>
          </tr>
          <tr>
            <th>Persistence</th>
            <td>This tag is persistent.</td>
          </tr>
          <tr>
            <th>Minimum Requirements</th>
            <td>Scanner or Imager module and device supports code128.</td>
          </tr>
        </table>
      </blockquote><br></div>
    <div id="DefaultParamsSpan" style="display:none">
      <pre><textarea id="DefaultParameters"></textarea></pre>
    </div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('AlsoSpan', 'imgAlsoToggle')"><img align="absmiddle" id="imgAlsoToggle" alt="Also Toggle" onmouseover="this.style.cursor='hand'" src="../../Resources/ToggleCollapse.gif"></span>
			See Also
		</p>
    <div id="AlsoSpan" style="display:block">
      <BLOCKQUOTE><a href="../Scanner.html&#xA;						">Scanner</a> <a href="Codabar.html&#xA;						">Codabar</a> </BLOCKQUOTE><br></div>
    <hr size="1">
    <div align="right">© 2016 Symbol Technologies, Inc. All rights reserved.</div>
  </body>
</html>