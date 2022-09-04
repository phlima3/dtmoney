import { Container } from "./styles";
export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        <tbody>
          <tr>
            <td className="title">Desenvolvimento de produto</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>02/09/2022</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de produto</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>02/09/2022</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de produto</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>02/09/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
