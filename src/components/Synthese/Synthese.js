
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import * as XLSX from "xlsx";
import Particle from "../Particle";
import { saveAs } from "file-saver";

function Synthese() {
  const [excelData, setExcelData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [fileName, setFileName] = useState("synthese.xlsx");
  const [isLoading, setIsLoading] = useState(true);

  // This would typically load your XLSX file
  useEffect(() => {
    // You can either fetch it from your assets or allow user upload
    const fetchExcelData = async () => {
      try {
        // Option 1: Load from local assets (you need to place your Excel file in public folder)
        const response = await fetch("/path-to-your-excel-file.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        parseExcel(arrayBuffer);
      } catch (error) {
        console.error("Error loading Excel file:", error);
        setIsLoading(false);
      }
    };

    fetchExcelData();
    // For demo purposes, let's create sample data
    createSampleData();
  }, []);

  const createSampleData = () => {
    // Sample data for demonstration
    const sampleHeaders = ["Projet", "Date", "Description", "Statut", "Technologies"];
    const sampleData = [
      ["Site E-commerce", "01/03/2024", "Développement d'un site e-commerce", "Terminé", "React, Node.js"],
      ["Application Mobile", "15/04/2024", "Application mobile de suivi fitness", "En cours", "React Native, Firebase"],
      ["Dashboard Admin", "10/05/2024", "Interface d'administration", "En cours", "React, Bootstrap"],
      ["API RESTful", "20/02/2024", "Développement d'une API", "Terminé", "Node.js, Express"],
      ["Refonte Site Web", "05/06/2024", "Refonte du site web corporate", "Planifié", "React, SCSS"]
    ];
    
    setHeaders(sampleHeaders);
    setExcelData(sampleData);
    setIsLoading(false);
  };

  const parseExcel = (buffer) => {
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
    if (data.length) {
      setHeaders(data[0]);
      setExcelData(data.slice(1));
    }
    
    setIsLoading(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      parseExcel(data);
    };
    reader.readAsArrayBuffer(file);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet([headers, ...excelData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Synthèse");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, fileName);
  };

  return (
    <Container fluid className="synthese-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Synthèse </strong> des projets
        </h1>
        <p style={{ color: "white" }}>
          Tableau récapitulatif de mes différents projets et compétences.
        </p>
        
        <Row className="mb-3">
          <Col md={6}>
            <div className="file-upload">
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                id="file-input"
                className="d-none"
              />
              <label htmlFor="file-input" className="btn btn-primary">
                Importer un fichier Excel
              </label>
              <span className="ml-2 text-white">{fileName}</span>
            </div>
          </Col>
          <Col md={6} className="text-right">
            <Button variant="success" onClick={exportToExcel}>
              Télécharger Excel
            </Button>
          </Col>
        </Row>

        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Chargement...</span>
            </div>
          </div>
        ) : (
          <div className="table-responsive">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Synthese;
