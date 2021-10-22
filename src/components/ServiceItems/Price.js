import React from "react";

const Price = () => {
  return (
    <>
      <table class="table table-info table-striped" >
        <thead>
          <tr>
            <th scope="col" class="text-center">Вид Услуги</th>
            <th scope="col" class="text-center">Количество занятий в договоре</th>
            <th scope="col" class="text-center">Понедельник-Пятница<br/>08:00-15:00, в BYN</th>
            <th scope="col" class="text-center">Остальное рабочее<br/> время, в BYN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">Диагностика и консультация</td>
            <td class="text-center">27.00</td>
            <td class="text-center">30.00</td>
          </tr>
          <tr>
            <td>Индивидуальное занятие</td>
            <td class="text-center">5 занятий<br/>(1 занятие)</td>
            <td class="text-center">105.00<br/>(21.00)</td>
            <td class="text-center">120.00<br/>(24.00)</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-center">10 занятий<br/>(1 занятие)</td>
            <td class="text-center">190.00<br/>(19.00)</td>
            <td class="text-center">220.00<br/>(22.00)</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-center">20 занятий<br/>(1 занятие)</td>
            <td class="text-center">105.00<br/>(21.00)</td>
            <td class="text-center">120.00<br/>(24.00)</td>
          </tr>
          <tr>
            <td colspan="2">Разовое индивидуальное занятие</td>
            <td class="text-center">27.00</td>
            <td class="text-center">30.00</td>
          </tr>
          <tr>
            <td>Логопедический массаж</td>
            <td class="text-center">10 сеансов<br/>(1 сеанс)</td>
            <td class="text-center">300.00<br/>(30.00)</td>
            <td class="text-center">320.00<br/>(32.00)</td>
          </tr>
          <tr>
            <td colspan="2">Разовый сеанс логопедического массажа</td>
            <td class="text-center">35.00</td>
            <td class="text-center">37.00</td>
          </tr>
          <tr>
            <td>Групповое логопедическое занятие</td>
            <td class="text-center">5 занятий<br/>(1 занятие)</td>
            <td class="text-center">50.00<br/>(10.00)</td>
            <td class="text-center">55.00<br/>(11.00)</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-center">10 занятий<br/>(1 занятие)</td>
            <td class="text-center">90.00<br/>(9.00)</td>
            <td class="text-center">100.00<br/>(10.00)</td>
          </tr>
          <tr>
            <td colspan="2">Разовое групповое логопедическое занятие</td>
            <td class="text-center">13.00</td>
            <td class="text-center">14.00</td>
          </tr>
          <tr>
            <td >Блок развивающих занятий<br/>по подготовке к школе</td>
            <td class="text-center">5 занятий<br/>(1 занятие)</td>
            <td class="text-center">100.00<br/>(20.00)</td>
            <td class="text-center">105.00<br/>(21.00)</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-center">10 занятий<br/>(1 занятие)</td>
            <td class="text-center">180.00<br/>(18.00)</td>
            <td class="text-center">190.00<br/>(19.00)</td>
          </tr>
          <tr>
          <td colspan="2">Разовое посещение блока по подготовке к школе</td>
            <td class="text-center">26.00</td>
            <td class="text-center">27.00</td>
          </tr>
          <tr>
            <td colspan="2">Диагностика и консультация на дому</td>
            <td colspan="2" class="text-center">37.00</td>
          </tr>
          <tr>
            <td>Индивидуальное занятие на дому</td>
            <td class="text-center">5 занятий<br/>(1 занятие)</td>
            <td colspan="2" class="text-center">135.00<br/>(27.00)</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-center">10 занятий<br/>(1 занятие)</td>
            <td colspan="2" class="text-center">250.00<br/>(25.00)</td>
          </tr>
          <tr>
            <td colspan="2">Разовое индивидуальное занятие на дому</td>
            <td colspan="2" class="text-center">37.00</td>
          </tr>
          <tr>
            <td>Индивидуальное занятие онлайн</td>
            <td class="text-center">5 занятий<br/>(1 занятие)</td>
            <td colspan="2" class="text-center">120.00<br/>(24.00)</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-center">10 занятий<br/>(1 занятие)</td>
            <td colspan="2" class="text-center">220.00<br/>(22.00)</td>
          </tr>
          <tr>
            <td colspan="2">Разовое индивидуальное занятие онлайн</td>
            <td colspan="2" class="text-center">30.00</td>
          </tr>
          <tr>
            <td>Логопедический массаж на дому</td>
            <td class="text-center">10 сеансов<br/>(1 сеанс)</td>
            <td colspan="2" class="text-center">370.00<br/>(37.00)</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Price