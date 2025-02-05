const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv").config();
const html_to_pdf = require("html-pdf-node");
const convertHTMLTOPDF = async (
  htmlContent,
  fileName,
  folderName,
  onSuccess,
  onError
) => {
  try {
    let options = { format: "A4" };
    let file = { content: htmlContent };

    html_to_pdf
      .generatePdf(file, options)
      .then((pdfBuffer) => {
        const name = `${Date.now()}-${fileName}.pdf`;
        const filePath = path.join(process.cwd(), folderName, name);
        fs.writeFileSync(filePath, pdfBuffer);
        const url = `${process.env?.NODE_PDF_URL}/${folderName}/${name}`;
        onSuccess(url);
      })
      .catch((error) => {
        onError(error);
      });
  } catch (error) {
    onError(error);
  }
};

module.exports = convertHTMLTOPDF;
