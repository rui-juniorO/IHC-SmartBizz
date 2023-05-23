import React from "react";
import html2pdf from "html2pdf.js";

class HTMLtoPDFConverter extends React.Component {
  constructor(props) {
    super(props);
    this.htmlRef = React.createRef();
  }

  convertToPDF = () => {
    const element = this.htmlRef.current;
    const opt = {
      margin: [0, 0, 0, 0],
      filename: "output.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };
  componentDidMount() {
    this.convertToPDF();
  }

  render() {
    return (
      <div>
        <button onClick={this.convertToPDF}>Gerar PDF</button>
        <div ref={this.htmlRef}>
          {/* Seu código HTML aqui */}
          <h1>Título do Documento</h1>
            
          <p>Conteúdo do documento... oashjgo+jsaogj++o+sjp´josdosodjosjdoj</p>
        </div>
      </div>
    );
  }
}

export default HTMLtoPDFConverter;