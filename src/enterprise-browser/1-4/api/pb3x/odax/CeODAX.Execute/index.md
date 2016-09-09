---
title: CeODAX.Execute.md
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
    <title>Execute </title><script type="text/javascript" language="Javascript">
					
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
          <h1>Execute  Method of the ODAX ActiveX Object</h1>
        </td>
        <td width="5%"><img valign="middle" id="imgSymbolLogo" alt="Symbol Inc" src="../Resources/Logo.gif"></td>
      </tr>
    </table>
    <hr size="1">
    <p>
					The 
					<b>Execute </b> Method of the ODAX ActiveX Object performs INSERT, UPDATE and DELETE statements on the specified file. The file can be either XML or CSV.</p>
    <p class="clsRef"><nobr><span class="ToggleView" onclick="ToggleSpan('SyntaxSpan', 'imgSyntaxToggle')"><img align="absmiddle" id="imgSyntaxToggle" alt="Syntax Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif&#xA;						">
					Syntax
				</span></nobr></p>
    <div id="SyntaxSpan" style="display:block">
      <blockquote>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <th class="clsSyntaxHeadings">Execute  (Method of the ODAX ActiveX Object) Syntax
						</th>
          </tr>
          <tr>
            <td class="clsSyntaxCells">
              <p>var count = object.Execute(sql_statement, format, delimiter, firstrow)</p>
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
            <td valign="top" class="clsSyntaxCells"><b>Sql_statement </b></td>
            <td valign="top" class="clsSyntaxCells">String</td>
            <td valign="top" class="clsSyntaxCells">String representing the INSERT, UPDATE and DELETE SQL statement to be executed</td>
            <td valign="top" class="clsSyntaxCells">N/A</td>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>Format </b></td>
            <td valign="top" class="clsSyntaxCells">0 or 1</td>
            <td valign="top" class="clsSyntaxCells">If no extension is supplied the format parameter is used to determine file format (0 = XML, 1 = CSV)</td>
            <td valign="top" class="clsSyntaxCells">N/A</td>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>Delimiter </b></td>
            <td valign="top" class="clsSyntaxCells">String</td>
            <td valign="top" class="clsSyntaxCells">Delimiter which is used in CSV files as a column separator. Even though there is no special use for this in XML files you cannot leave this blank, hence you need to provide a valid value</td>
            <td valign="top" class="clsSyntaxCells">N/A</td>
          </tr>
          <tr>
            <td valign="top" class="clsSyntaxCells"><b>FirstRow</b></td>
            <td valign="top" class="clsSyntaxCells">True or False</td>
            <td valign="top" class="clsSyntaxCells">This denotes that the first row of a CSV file contain the Column Names. If set to false in CSV mode it will retrieve columns as column1, column2 etc</td>
            <td valign="top" class="clsSyntaxCells">N/A</td>
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
            <td class="clsSyntaxCells" valign="top"><b>Count</b></td>
            <td class="clsSyntaxCells" style="text-align:left;">Returns 0 if no record were updated/deleted/inserted or returns the number of record affected by the operation. (Please Refer Error Codes for More Detail)</td>
          </tr>
        </table>
      </blockquote><br></div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('ExamplesSpan', 'imgExamplesToggle')"><img align="absmiddle" id="imgExamplesToggle" alt="Examples Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
			Examples
		</p>
    <div id="ExamplesSpan" style="display:block">
      <blockquote>
        <p>The following example inserts records to a XML file: </p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");

   var FieldValue1 = 'Red';
   var FieldValue2 =  Green';
   var FieldValue3 = 'Blue';

   var QueryString = 'INSERT INTO \'\\application\\test.xml\' (field1,field2,field3) VALUES (';
   QueryString += '\''+FieldValue1+'\',';
   QueryString += '\''+FieldValue2+'\',';
   QueryString += '\''+FieldValue3+'\');';
   var count = ax.Execute(QueryString,0,',',false);
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
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0E1C');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0E1C">&lt;!-- 
The following example inserts records to a XML file: 
--&gt;

&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");

   var FieldValue1 = 'Red';
   var FieldValue2 =  Green';
   var FieldValue3 = 'Blue';

   var QueryString = 'INSERT INTO \'\\application\\test.xml\' (field1,field2,field3) VALUES (';
   QueryString += '\''+FieldValue1+'\',';
   QueryString += '\''+FieldValue2+'\',';
   QueryString += '\''+FieldValue3+'\');';
   var count = ax.Execute(QueryString,0,',',false);
&lt;/script&gt;
</textarea></div>
        <p>The following example inserts records to a CSV file: </p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");

   var QueryString = 'INSERT INTO \'\\application\\test.csv\' (field1,field2,field3) VALUES (';
   QueryString += '\''+FieldValue1+'\',';
   QueryString += '\''+FieldValue2+'\',';
   QueryString += '\''+FieldValue3+'\');';
   var count = ax.Execute(QueryString,1,',',true);
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
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EBD');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EBD">&lt;!-- 
The following example inserts records to a CSV file: 
--&gt;

&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");

   var QueryString = 'INSERT INTO \'\\application\\test.csv\' (field1,field2,field3) VALUES (';
   QueryString += '\''+FieldValue1+'\',';
   QueryString += '\''+FieldValue2+'\',';
   QueryString += '\''+FieldValue3+'\');';
   var count = ax.Execute(QueryString,1,',',true);
&lt;/script&gt;
</textarea></div>
        <p>The following example updates records in a XML file</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");
   var fieldValue = 'Orange';
   var conditionField = 'Red';

   var QueryString = 'UPDATE \'\\application\\test.xml\' SET field1=';
   QueryString += '\''+ fieldValue +'\'';
   QueryString += ' WHERE field1=\'';
   QueryString += conditionField +"\';"
   var count = ax.Execute(QueryString,0,',',false);
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
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EID');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EID">&lt;!-- 
The following example updates records in a XML file
--&gt;

&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");
   var fieldValue = 'Orange';
   var conditionField = 'Red';

   var QueryString = 'UPDATE \'\\application\\test.xml\' SET field1=';
   QueryString += '\''+ fieldValue +'\'';
   QueryString += ' WHERE field1=\'';
   QueryString += conditionField +"\';"
   var count = ax.Execute(QueryString,0,',',false);
&lt;/script&gt;
</textarea></div>
        <p>The following example deletes records in a XML file</p>
        <table class="clsSyntax" cellspacing="1" cellpadding="3" width="95%">
          <tr>
            <td>
              <pre class="clsSyntaxCells">
&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");
   var conditionField = 'Red';

   var QueryString = 'DELETE FROM \'\\application\\test.xml\' WHERE field1=';
   QueryString += '\''+ conditionField +'\';';
   var count = ax.Execute(QueryString,0,',',false);
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
            <td valign="bottom" style="border-bottom-style: none;font-weight:normal;font-size:xx-small;"><nobr><img id="imgCopyDefaults" alt="Copy example to clipboard" onmouseover="this.style.cursor='hand'" src="../Resources/CopyDefaults.gif" onclick="CopyTemplate('ID0EPD');">
									Copy example to clipboard
								</nobr></td>
          </tr>
        </table>
        <div id="Examples" style="display:none"><textarea id="ID0EPD">&lt;!-- 
The following example deletes records in a XML file
--&gt;

&lt;script&gt;
   var ax = new ActiveXObject("CeODAX.ODAX");
   var conditionField = 'Red';

   var QueryString = 'DELETE FROM \'\\application\\test.xml\' WHERE field1=';
   QueryString += '\''+ conditionField +'\';';
   var count = ax.Execute(QueryString,0,',',false);
&lt;/script&gt;
</textarea></div>
      </blockquote>
    </div>
    <p class="clsRef"><span class="ToggleView" onclick="ToggleSpan('RemarksSpan', 'imgRemarksToggle')"><img align="absmiddle" id="imgRemarksToggle" alt="Remarks Toggle" onmouseover="this.style.cursor='hand'" src="../Resources/ToggleCollapse.gif"></span>
			Remarks
		</p>
    <div id="RemarksSpan" style="display:block">
      <blockquote>
        <DIV class="clsRef">General</DIV>
        <DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">The delimiter and firstrow are a Select.  If firstrow is set to true when creating a table with INSERT, then the field names are written to the first row as column names.</DIV>
        <pre style="font-family:courier;font-size:small;"></pre>
        <DIV class="clsRef">Query needed after Execute</DIV>
        <DIV style="font-family:verdana,arial,helvetica;font-size:x-small;">
The current result set becomes invalid after any Execute (INSERT, UPDATE, DELETE) and arbitrary values will be returned by MoveFirst etc. A new SELECT query must be performed to get valid results.  
        </DIV>
        <pre style="font-family:courier;font-size:small;"></pre>
      </blockquote><br></div>
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
            <th>Minimum Requirements</th>
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
      <BLOCKQUOTE><a href="CeODAX.Clear.html&#xA;						">CeODAX.Clear</a> <a href="CeODAX.Copy.html&#xA;						">CeODAX.Copy</a> <a href="CeODAX.Delete.html&#xA;						">CeODAX.Delete</a> <a href="CeODAX.FileExists.html&#xA;						">CeODAX.FileExists</a> <a href="CeODAX.Get.html&#xA;						">CeODAX.Get</a> <a href="CeODAX.GetLastErrorString.html&#xA;						">CeODAX.GetLastErrorString</a> <a href="CeODAX.Move.html&#xA;						">CeODAX.Move</a> <a href="CeODAX.MoveFirst.html&#xA;						">CeODAX.MoveFirst</a> <a href="CeODAX.MoveLast.html&#xA;						">CeODAX.MoveLast</a> <a href="CeODAX.MoveNext.html&#xA;						">CeODAX.MoveNext</a> <a href="CeODAX.MovePrev.html&#xA;						">CeODAX.MovePrev</a> <a href="CeODAX.Select.html&#xA;						">CeODAX.Select</a> </BLOCKQUOTE><br></div>
    <hr size="1">
    <div align="right">© 2016 Symbol Technologies, Inc. All rights reserved.</div>
  </body>
</html>