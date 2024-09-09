import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import "./ExamePage.css";

const ExamePage = ({ results }) => {
  const { exameId } = useParams(); // Pega o ID do exame da URL
  const exame = results.find((result) => result.id == exameId); // Busca o exame correspondente

  if (!exame) {
    return <div>Exame não encontrado</div>;
  }

  return (
    <>
      <div className="header-card">
        {exame.REALIZAÇÃO && (
          <Card
            title="CÓDIGO DO TASY - NOME DO EXAME"
            bordered={false}
            style={{ marginBottom: 16 }}
          >
            <p><strong>{(exame.EXAME).toUpperCase()}</strong></p>
          </Card>
        )}
      </div>

      <div className="cards">
        {exame.REALIZAÇÃO && (
          <Card
            title="código e exame"
            bordered={false}
            style={{ marginBottom: 16 }}
          >
            <p>{exame.EXAME}</p>
          </Card>
        )}
        {exame.REALIZAÇÃO && (
          <Card
            title="Realização"
            bordered={false}
            style={{ marginBottom: 16 }}
          >
            <p>{exame.REALIZAÇÃO.toLowerCase()}</p>
          </Card>
        )}
        {exame.PREPARO && (
          <Card title="Preparo" bordered={false} style={{ marginBottom: 16 }}>
            <p>{exame.PREPARO.toLowerCase()}</p>
          </Card>
        )}
        {exame["ORIENTAÇÕES DE COLETA"] && (
          <Card
            title="Orientações de Coleta"
            bordered={false}
            style={{ marginBottom: 16 }}
          >
            <p>{exame["ORIENTAÇÕES DE COLETA"].toLowerCase()}</p>
          </Card>
        )}

        {exame.FORMULÁRIO && (
          <Card
            title="Formulário"
            bordered={false}
            style={{ marginBottom: 16 }}
          >
            <p>{exame.FORMULÁRIO.toLowerCase()}</p>
          </Card>
        )}

        {exame.PRODUÇÃO && (
          <Card title="Produção" bordered={false} style={{ marginBottom: 16 }}>
            <p>{exame.PRODUÇÃO.toLowerCase()}</p>
          </Card>
        )}
        {exame["CBHPM/TUSS"] && (
          <Card
            title="CBHPM/TUSS"
            bordered={false}
            style={{ marginBottom: 16 }}
          >
            <p>{exame["CBHPM/TUSS"].toLowerCase()}</p>
          </Card>
        )}
        {exame["INFORMAÇÕES ADICIONAIS"] && (
          <Card
            title="INFORMAÇÕES ADICIONAIS"
            bordered={false}
            style={{ marginBottom: 16 }}
          >
            <p>{exame["INFORMAÇÕES ADICIONAIS"].toLowerCase()}</p>
          </Card>
        )}
      </div>
    </>
  );
};

export default ExamePage;
