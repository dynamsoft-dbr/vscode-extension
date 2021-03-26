# Dynamsoft JavaScript Barcode SDK
[Dynamsoft JavaScript Barcode SDK](https://www.dynamsoft.com/barcode-reader/sdk-javascript/) is a JavaScript library for barcode scanning based on the WebAssembly technology. It supports real-time localization and decoding of various barcode types. The library is capable of scanning barcodes from static images as well as directly from live video streams. 

## Online Demo
Try it [here](https://demo.dynamsoft.com/barcode-reader-js/).

![web barcode reader](https://raw.githubusercontent.com/dynamsoft-dbr/javascript-barcode/dac614f8033661901d85381dfaff8d612115862a/img/dbr-wasm-demo-scaning.jpg)

## Supported Barcode Symbologies
* 1D barcode: Code 39, Code 93, Code 128, Codabar, EAN-8, EAN-13, UPC-A, UPC-E, Interleaved 2 of 5 (ITF), Industrial 2 of 5 (Code 2 of 5 Industry, Standard 2 of 5, Code 2 of 5), ITF-14
* 2D barcode: QR Code, DataMatrix, PDF417, MaxiCode, Aztec Code, DotCode


## How to Use the Extension
- Press **F1** and type in **dbr** to quickly create a "Hello World" program.
- Use the prefix **dbr** to show code snippets in **HTML** files.

## Quick Start

```HTML
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
</html>
```

## License Key
Please visit https://www.dynamsoft.com/customer/license/trialLicense to get a valid license and update PRODUCT-KEYS:

```html
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
```