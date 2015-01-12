<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="projects.aspx.cs" Inherits="jordanwilcken.com.WebForm1" %>

<%@ Import Namespace="System.IO" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <!-- third-party stylesheets -->
    <link href="js/jq/css/jquery.ui.all.css" rel="stylesheet" type="text/css" />
    
    <!-- my stylesheets -->    
    <link href="css/base.css" rel="stylesheet" type="text/css">
    <link href="css/projects.css" rel="stylesheet" type="text/css">

    <!-- third-party javascript -->
    <script src="js/jq/jquery-1.9.1.js"></script>
    <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>

    <!-- my javascript -->
    <script src="js/projects.js"></script>
    <script>
        $(function () { projects.initModule($('#wrapper')); });
    </script>

</head>
<body>
    <div id="wrapper">
        <div id="all-my-content">
            <div id="projects-list">
                <div id="project-list-header">Projects</div>
				<%  
                    string projectsPath = Path.Combine(Server.MapPath("~"), @"projects");
                    foreach (string file in Directory.EnumerateFiles(projectsPath, "*.htm*"))
                    {
                        string fileName = Path.GetFileName(file);
                        string infoURL = Directory.GetParent(file).Name + "/" + fileName;
                        string projectName = Regex.Match(fileName, @"[^\\]+(?=\.[A-Za-z]+$)").Value; %>
                <a class="project-name"><%= projectName %></a>
                <% } %>
            </div>
            <div id="project-info-container">
			</div>
        </div>
    </div>
</body>
</html>
