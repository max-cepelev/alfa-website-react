import React from 'react'
import CreditCalc from '../../components/CreditCalc'

export default function Calc() {
  return (
    <section className="calc">
      <div className="calc__container">
        <div className="calc__title title">Ипотечный калькулятор</div>
        <div className="calc__body">
          {/* <div className="calc__filetrs">
            
          </div> */}
          <CreditCalc />
          <div className="calc__banks calc-banks">
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#21a038' }} className="calc-banks__title">
                <img src="@img/options-page/calc/sber.png" alt="" /> СберБанк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#004e7c' }} className="calc-banks__title">
                <img src="@img/options-page/calc/VTB.png" alt="" /> ВТБ
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#ee3124' }} className="calc-banks__title">
                <img src="@img/options-page/calc/alfa.png" alt="" />
                Альфа Банк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#333333' }} className="calc-banks__title">
                <img src="@img/options-page/calc/RB.png" alt="" />
                РайффайзенБанк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#004785' }} className="calc-banks__title">
                <img src="@img/options-page/calc/MB.png" alt="" />
                Металлинвест банк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#7b7b7b' }} className="calc-banks__title">
                <img src="@img/options-page/calc/absolut.png" alt="" />
                Абсолют Банк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#004785' }} className="calc-banks__title">
                <img src="@img/options-page/calc/TB.png" alt="" />
                Транскапитал банк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#bc0062' }} className="calc-banks__title">
                <img src="@img/options-page/calc/klookva.png" alt="" />
                Клюква
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#004584' }} className="calc-banks__title">
                <img src="@img/options-page/calc/uralsib.png" alt="" />
                Уралсиб
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#00bbe4' }} className="calc-banks__title">
                <img src="@img/options-page/calc/open.png" alt="" />
                Открытие
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#2f454e' }} className="calc-banks__title">
                <img src="@img/options-page/calc/dom.png" alt="" />
                Дом.РФ
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#040204' }} className="calc-banks__title">
                <img src="@img/options-page/calc/rosbank.png" alt="" />
                Росбанк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#005395' }} className="calc-banks__title">
                <img src="@img/options-page/calc/Sovkombank.png" alt="" />
                Совкомбанк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#333333' }} className="calc-banks__title">
                <img src="@img/options-page/calc/UBRiR.png" alt="" />
                УБРиР
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#333333' }} className="calc-banks__title">
                <img src="@img/options-page/calc/uni.png" alt="" />
                УЮниКредит
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
            <a href="#" className="calc-banks__bank border">
              <div style={{ color: '#2c2d84' }} className="calc-banks__title">
                <img src="@img/options-page/calc/prombank.png" alt="" />
                ПромСвязьБанк
              </div>
              <div className="calc-banks__info">
                <div className="calc-banks__row">
                  <span>ПВ</span>
                  <span>от 20%</span>
                </div>
                <div className="calc-banks__row">
                  <span>ставка</span>
                  <span>от 16,9%</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
