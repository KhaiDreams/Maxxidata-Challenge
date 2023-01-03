import * as S from "./styles";
import { Button } from "../Button";

interface IProps {
    setFirstPage(value: number): void;
    setLastPage(value: number): void;
    lastPage: number;
    firstPage: number;
    totalPages: number;
}

export function Pagination({
  setFirstPage,
  setLastPage,
  lastPage,
  firstPage,
  totalPages,
}: IProps) {
  function nextPage() {
    setFirstPage(Number(firstPage) + 10);
    setLastPage(Number(firstPage) + 20);
  }

  function backPage() {
    setFirstPage(Number(firstPage) - 10);
    setLastPage(Number(lastPage) - 10);
  }

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const currentPage = Math.floor(lastPage / 10).toFixed();

  return (
    <S.Container>
      <Button
        bgColor={`${firstPage > 5 ? "var(--color-3)" : "#eaa353a1"}`}
        onClick={() => (firstPage > 5 ? backPage() : setFirstPage(0))}
      >
        Anterior
      </Button>

      <Button
        bgColor="var(--color-2)"
      >
        {currentPage}
      </Button>

      <Button
        bgColor={`${lastPage > totalPages ? "#eaa353a1" : "var(--color-3)"}`}
        onClick={() => lastPage < totalPages && nextPage()}
      >
        Próximo
      </Button>
    </S.Container>
  );
}