import React, { useEffect, useState } from 'react'

interface Props {
  initPrice?: number
  rate?: number
  initStartFeeRate?: number
  onConfirm?: () => void
}

export default function CreditCalc({
  initPrice = 6000000,
  rate = 6.5,
  initStartFeeRate = 0.2,
}: Props) {
  const [price, setPrice] = useState(initPrice)
  const [startFee, setStartFee] = useState(initPrice * initStartFeeRate)
  const [startFeeRate, setStartFeeRate] = useState(initStartFeeRate)
  const [creditTerm, setCreditTerm] = useState(15)
  const [total, setTotal] = useState(0)

  const costChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    // const newValue = value.replace(/[^0-9]+/g, '')

    if (!isNaN(+value)) {
      setPrice(+value)
    }
  }

  const startFeeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (!isNaN(+value)) {
      setStartFee(+value)
    }
  }

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (!isNaN(+value)) {
      setCreditTerm(+value)
    }
  }

  useEffect(() => {
    if (startFee > price) {
      setStartFee(price)
    }
  }, [price])

  useEffect(() => {
    const value = price > 0 ? (startFee / price) * 100 : 0
    setStartFeeRate(+value)
  }, [price, startFee])

  useEffect(() => {
    const interestRate = rate / 100 / 12

    const term = creditTerm * 12

    const creditSum = price - startFee

    let pay =
      creditSum *
      (interestRate + interestRate / ((1 + interestRate) ** term - 1))

    if (!isNaN(pay) && isFinite(pay)) {
      let localPay = pay
      setTotal(localPay)
    }
  }, [creditTerm, price, startFee])

  return (
    <div className="creditCalc">
      <div className="creditCalc__price field">
        <label htmlFor="apartmentCost">Стоимость квартиры, руб</label>
        <input
          className="creditCalc__textinput"
          type="text"
          name="apartmentCost"
          value={price}
          onChange={costChange}
        />
        <input
          className="creditCalc__slider creditCalc__initialFee-slider"
          type="range"
          min={0}
          max={initPrice}
          value={price}
          step={5000}
          onChange={costChange}
        />
      </div>
      <div className="creditCalc__initialFee field">
        <label htmlFor="startFee">Первоначальный взнос, руб</label>
        <div className="creditCalc__initialFee-input">
          <input
            className="creditCalc__textinput"
            type="text"
            name="startFee"
            value={startFee}
            onChange={startFeeChange}
          />
          <span>
            {startFeeRate.toLocaleString('ru-RU', {
              maximumFractionDigits: 1,
            })}
            %
          </span>
        </div>
        <input
          className="creditCalc__slider creditCalc__initialFee-slider"
          type="range"
          min={0}
          max={price}
          value={startFee}
          step={5000}
          onChange={startFeeChange}
        />
      </div>
      <div className="creditCalc__term field">
        <label htmlFor="creditTerm">Срок кредита, лет</label>
        <input
          className="creditCalc__textinput"
          type="text"
          name="creditTerm"
          value={creditTerm}
          onChange={handleTermChange}
        />
        <input
          name="creditTerm"
          type="range"
          min="0"
          max="50"
          value={creditTerm}
          onChange={handleTermChange}
          className="creditCalc__slider"
        />
      </div>
      <div className="creditCalc__total">
        <p>Ежемесячный платёж</p>
        <div>
          <p className="text">
            {total.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            })}
          </p>
        </div>
      </div>
      <div className="creditCalc__rate">
        <p>Ставка по кредиту</p>
        <div>
          <p className="text">{rate.toLocaleString('ru-RU')}%</p>
        </div>
      </div>
      <button className="creditCalc__button btn-orange">
        Подобрать квартиру под мои условия
      </button>
    </div>
  )
}
