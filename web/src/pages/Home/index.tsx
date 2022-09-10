import { useState } from "react";
import DatePicker from "react-datepicker";
import PtBr from "date-fns/locale/pt-BR";
import { Header } from "../../components/Header";
import {
  ButtonNotification,
  ContainerHome,
  Content,
  ScrollAuto,
  Table,
  WrapperDatePicker,
} from "./styles";
import iconUser from "../../assets/use.svg";
import "react-datepicker/dist/react-datepicker.css";

export const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const DATE_FORMAT = "dd/MM/yyyy";

  return (
    <>
      <Header />
      <ContainerHome>
        <Content>
          <WrapperDatePicker>
            <h2>Vendas</h2>

            <div>
              <DatePicker
                locale={PtBr}
                selected={startDate}
                className="date-picker"
                onChange={(date: Date) => setStartDate(date)}
                dateFormat={DATE_FORMAT}
              />
              <DatePicker
                locale={PtBr}
                selected={endDate}
                className="date-picker"
                onChange={(date: Date) => setEndDate(date)}
                dateFormat={DATE_FORMAT}
              />
            </div>
          </WrapperDatePicker>

          <ScrollAuto>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Data</th>
                  <th>Vendedor</th>
                  <th>Visitas</th>
                  <th>Vendas</th>
                  <th>Total</th>
                  <th>Notificar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#345</td>
                  <td>08/05/2022</td>
                  <td>Mauricio</td>
                  <td>10</td>
                  <td>12</td>
                  <td>R$ 5.325,55</td>
                  <td>
                    <ButtonNotification>
                      <img src={iconUser} />
                    </ButtonNotification>
                  </td>
                </tr>
                <tr>
                  <td>#345</td>
                  <td>08/05/2022</td>
                  <td>Mauricio</td>
                  <td>10</td>
                  <td>12</td>
                  <td>R$ 5.325,55</td>
                  <td>
                    <ButtonNotification>
                      <img src={iconUser} />
                    </ButtonNotification>
                  </td>
                </tr>
              </tbody>
            </Table>
          </ScrollAuto>
        </Content>
      </ContainerHome>
    </>
  );
};
