# HTML to PDF Exporter

A simple Node.js package that converts HTML content to a PDF and saves it to a specified folder. Once saved, the PDF can be accessed via a URL.

---

## Table of Contents

1. [Installation](#installation)
2. [Setup](#setup)
3. [Usage](#usage)
   - [Function Signature](#function-signature)
   - [Example](#example)
4. [Environment Variables](#environment-variables)
5. [Folder Setup](#folder-setup)
6. [Error Handling](#error-handling)
7. [License](#license)

---

## Installation

To use the `html-to-pdf-exporter` package, follow these steps:

### 1. Install the required dependencies

This package relies on `html-pdf-node` for PDF generation and `dotenv` to manage environment variables.

Run the following command to install the necessary packages:

```bash
npm install html-pdf-node dotenv

2. Install the package
If you're using it as a standalone package, install it via NPM:

bash
Copy
npm install html-to-pdf-exporter


1. Create a .env file
At the root of your project, create a .env file to define the URL where the generated PDFs will be accessible.

Example .env file:

env
Copy
NODE_PDF_URL=http://yourdomain.com/pdf
Replace http://yourdomain.com/pdf with the URL where your PDFs will be served from.



Environment Variables
Make sure to set the following environment variable in your .env file:

NODE_PDF_URL: The base URL where the generated PDF files will be accessible.

Expected Output:
If successful, the callback onSuccess will receive a URL pointing to the generated PDF file:

Error Handling
The convertHTMLTOPDF function has built-in error handling. You can provide an onError callback to handle any issues, such as:

Invalid HTML content
File write permission errors
PDF generation issues


Folder Setup
The folder specified in folderName must either exist or be created by the script. If it doesn't exist, ensure you have appropriate file permissions to create it on the server.

Additional Notes:
File Paths: The generated PDF will be saved on the server in the folder specified in folderName. The URL to access the PDF will be constructed using the environment variable NODE_PDF_URL.
