import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";
import PtBr from "date-fns/locale/pt-BR";
import format from "date-fns/format";

import { Header } from "../../components/Header";
import {
  ButtonNotification,
  ContainerHome,
  Content,
  ScrollAuto,
  Table,
  Wrapper,
  WrapperDatePicker,
} from "./styles";
import iconUser from "../../assets/use.svg";
import { api } from "../../services/api";

import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

interface Sales {
  id: number;
  sellerName: string;
  visited: number;
  deals: number;
  amount: number;
  amountFormatBR: string;
  dateFormatBR: string;
  date: string;
}

interface DataPage {
  content: Sales[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export const Home = () => {
  const [sales, setSales] = useState<Sales[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const DATE_FORMAT = "dd/MM/yyyy";

  useEffect(() => {
    async function fetchSales() {
      try {
        let queryDate = "";

        if (startDate && endDate) {
          queryDate = `?startDate=${format(
            startDate,
            "yyyy-MM-dd"
          )}&endDate=${format(endDate, "yyyy-MM-dd")}`;
        }

        const response = await api.get<DataPage>(`/sales${queryDate}`);

        if (response.status === 200) {
          const parseData = response.data.content.map((sale) => ({
            ...sale,
            amountFormatBR: sale.amount.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            }),
            dateFormatBR: new Intl.DateTimeFormat("pt-BR").format(
              new Date(sale.date)
            ),
          }));

          setSales(parseData);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchSales();
  }, [endDate, startDate]);

  const handleNotification = async (saleId: number) => {
    try {
      await api.get(`/sales/${saleId}/notification`);
      toast.info("Notificação envidada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar a notificação");
    }
  };

  return (
    <>
      <Header />
      <ContainerHome>
        <Content>
          <ToastContainer />
          <WrapperDatePicker>
            <h2>Vendas</h2>

            <div>
              <Wrapper>
                <p>Data Início: </p>
                <DatePicker
                  locale={PtBr}
                  selected={startDate}
                  className="date-picker"
                  onChange={(date: Date) => setStartDate(date)}
                  dateFormat={DATE_FORMAT}
                  placeholderText="Selecione uma data"
                />
              </Wrapper>
              <Wrapper>
                <p>Data Fim:</p>
                <DatePicker
                  disabled={!startDate}
                  locale={PtBr}
                  selected={endDate}
                  className="date-picker"
                  onChange={(date: Date) => setEndDate(date)}
                  dateFormat={DATE_FORMAT}
                  placeholderText="Selecione uma data"
                />
              </Wrapper>
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
                {sales.map((sale) => (
                  <tr key={sale.id}>
                    <td>{`#${sale.id}`}</td>
                    <td>{sale.dateFormatBR}</td>
                    <td>{sale.sellerName}</td>
                    <td>{sale.visited}</td>
                    <td>{sale.deals}</td>
                    <td>{sale.amountFormatBR}</td>
                    <td>
                      <ButtonNotification
                        onClick={() => handleNotification(sale.id)}
                      >
                        <img src={iconUser} />
                      </ButtonNotification>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ScrollAuto>
        </Content>
      </ContainerHome>
    </>
  );
};
