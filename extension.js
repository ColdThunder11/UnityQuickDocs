// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
var exec = require('child_process').exec;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "unityquickdocs" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('unityQuickDocs.turn2Docs', () => {
		// The code you place here will be executed every time your command is executed
		var selectedStr = vscode.window.activeTextEditor.document.getText(new vscode.Range(vscode.window.activeTextEditor.selection.start, vscode.window.activeTextEditor.selection.end));
		var version = vscode.workspace.getConfiguration().get("unityQuickDocs.version");
		if (selectedStr != "") {
			var shellStr = "start https://docs.unity3d.com/"+version + "/Documentation/ScriptReference/30_search.html?q="+selectedStr;
			exec(shellStr, function () { });
		}

	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
