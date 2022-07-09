import React, { useEffect, useState } from "react";
import CreditCalc from "../../components/CreditCalc";
import getJsonData from "../../helpers/getJsonData";
import { IBank } from "../../interfaces/IBank";

export default function Calc() {
  const [data, setData] = useState<IBank[] | null>(null);
  const [rate, setRate] = useState(6.5);
  const [startFeeRate, setStartFeeRate] = useState(20);

  const handleClick = (rate: number, startFeeRate: number) => {
    setRate(rate);
    setStartFeeRate(startFeeRate);
  };

  useEffect(() => {
    getJsonData("/banks.json").then((res: IBank[]) => {
      setData(res);
    });
  }, []);

  return (
    <section className="calc">
      <div className="calc__container">
        <div className="calc__title title">Ипотечный калькулятор</div>
        <div className="calc__body">
          <CreditCalc rate={rate} initStartFeeRate={startFeeRate} />
          <div className="calc__banks calc-banks">
            {data &&
              data.map((bank) => (
                <div
                  key={bank.id}
                  className="calc-banks__bank border"
                  onClick={() => handleClick(bank.rate, bank.startFeeRate)}
                >
                  <div
                    style={{ color: bank.titleColor }}
                    className="calc-banks__title"
                  >
                    <img src={bank.img} alt={bank.name} />
                    {bank.name}
                  </div>
                  <div className="calc-banks__info">
                    <div className="calc-banks__row">
                      <span>ПВ</span>
                      <span>от {bank.startFeeRate}%</span>
                    </div>
                    <div className="calc-banks__row">
                      <span>ставка</span>
                      <span>от {bank.rate}%</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
