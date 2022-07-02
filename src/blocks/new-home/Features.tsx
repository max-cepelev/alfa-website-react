import React from 'react'

export default function Features() {
  return (
    <section className="features-home">
      <div className="features-home__container">
        <div className="features-home__body">
          <div className="features-home__title title">особенности проекта</div>
          <div className="features-home__items features-items">
            <div className="features-items__item">
              <img
                className="features-items__image"
                src="/img/features/01.png"
                alt=""
              />
              <div className="features-items__content blue">
                <div className="features-items__title">центральный район</div>
                <div className="features-items__text">
                  10 минут до Тихого Компроса, 15 минут до центра города
                </div>
              </div>
            </div>
            <div className="features-items__item">
              <img
                className="features-items__image"
                src="/img/features/02.jpg"
                alt=""
              />
              <div className="features-items__content orange">
                <div className="features-items__title">
                  свой <br />
                  двор-парк
                </div>
                <div className="features-items__text">
                  За вашим домом расположен уютный придомовой парк
                </div>
              </div>
            </div>
            <div className="features-items__item">
              <img
                className="features-items__image"
                src="/img/features/03.jpg"
                alt=""
              />
              <div className="features-items__content grey">
                <div className="features-items__title">зелёное кольцо</div>
                <div className="features-items__text">
                  Проект прелбразования долины малых рек Егошихи и Данилихи
                </div>
              </div>
            </div>
            <div className="features-items__item">
              <img
                className="features-items__image"
                src="/img/features/04.jpg"
                alt=""
              />
              <div className="features-items__content black">
                <div className="features-items__title">детский клуб</div>
                <div className="features-items__text">
                  В цокольном этаже планируется создание детского клуба
                </div>
              </div>
            </div>
          </div>
          <div className="features-home__control-slider">
            <div className="features-home__pagination pagination">
              <span></span>
              <span></span>
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
            <div className="features-home__arrows">
              <div className="features-home__arrow-prev arrow _icon-arrow"></div>
              <div className="features-home__arrow-next arrow _icon-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
