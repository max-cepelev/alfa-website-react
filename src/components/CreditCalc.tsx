import { Slider } from 'antd'
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
  initStartFeeRate = 20,
}: Props) {
  const [price, setPrice] = useState(initPrice)
  const [startFee, setStartFee] = useState(initPrice * (initStartFeeRate / 100))
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
    setStartFee(Math.round(price * (initStartFeeRate / 100)))
  }, [initStartFeeRate])

  useEffect(() => {
    const value = price > 0 ? (startFee / price) * 100 : 0
    setStartFeeRate(+value)
  }, [price, startFee])

  useEffect(() => {
    const interestRate = rate / 100 / 12

    const term = creditTerm * 12

    const creditSum = price - startFee

    const pay =
      creditSum *
      (interestRate + interestRate / ((1 + interestRate) ** term - 1))

    if (!isNaN(pay) && isFinite(pay)) {
      setTotal(pay)
    }
  }, [rate, creditTerm, price, startFee])

  return (
    <div className="creditCalc">
      <div className="creditCalc__row">
        <label className="creditCalc__title" htmlFor="apartmentCost">
          Стоимость квартиры, руб
        </label>
        <input
          className="creditCalc__input"
          type="text"
          name="apartmentCost"
          value={price}
          onChange={costChange}
        />
        <Slider
          max={initPrice}
          value={price}
          onChange={(e) => setPrice(e)}
          tooltipVisible={false}
        />
      </div>
      <div className="creditCalc__row">
        <label className="creditCalc__title" htmlFor="startFee">
          Первоначальный взнос, руб
        </label>
        <input
          className="creditCalc__input"
          type="text"
          name="startFee"
          value={startFee}
          onChange={startFeeChange}
        />
        <span>{startFeeRate.toFixed()}%</span>
        <Slider
          max={price}
          value={startFee}
          onChange={(e) => setStartFee(e)}
          tooltipVisible={false}
        />
      </div>
      <div className="creditCalc__row">
        <label className="creditCalc__title" htmlFor="creditTerm">
          Срок кредита, лет
        </label>
        <input
          className="creditCalc__input"
          type="text"
          name="creditTerm"
          value={creditTerm}
          onChange={handleTermChange}
        />
        <Slider
          max={40}
          value={creditTerm}
          onChange={(e) => setCreditTerm(e)}
          tooltipVisible={false}
        />
      </div>
      <div className="creditCalc__columns creditCalc-columns">
        <div className="creditCalc-columns__column">
          <div className="creditCalc-columns__title">Ежемесячный платеж</div>
          <div className="creditCalc-columns__value">
            {total.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            })}
          </div>
        </div>
        <div className="creditCalc-columns__column">
          <div className="creditCalc-columns__title">Ставка по кредиту</div>
          <div className="creditCalc-columns__value">
            {rate.toLocaleString('ru-RU')}%
          </div>
        </div>
      </div>
      <button className="creditCalc__button btn-orange">
        Подобрать квартиру под мои условия
      </button>
    </div>
  )
}
