// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
const init = `
<!DOCTYPE html>
<html>
<body>
	<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
	<script>
		let scanner = null;
		(async()=>{
			scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
			scanner.onFrameRead = results => {console.log(results);};
			scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
			await scanner.show();
		})();
	</script>
</body>
</html>`
;

export function activate(context: vscode.ExtensionContext) {

	function quickStart() {
		
		let folder = vscode.workspace.rootPath; 
		if (!folder) {
			vscode.window.showWarningMessage('No folder opened!');
			return;
		}

		const htmlFile = path.join(folder, 'index.html');

		fs.writeFile(htmlFile, init, 'utf-8', (err) => {
			if (err) {
				console.log(err);
			}
			else {
				vscode.window.showInformationMessage('Created index.html');
			}
		});
	}

	context.subscriptions.push(...[
		vscode.commands.registerCommand('dbr.create', quickStart),
	]);
}


// this method is called when your extension is deactivated
export function deactivate() {}
